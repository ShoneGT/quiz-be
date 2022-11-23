import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true})
export class QuizGateway {
  @WebSocketServer() wss: Server
  constructor(private readonly quizService: QuizService) {}

  @SubscribeMessage('createQuiz')
  create(@MessageBody() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @SubscribeMessage('findAllQuiz')
  findAll() {
    return this.quizService.findAll();
  }

  @SubscribeMessage('findOneQuiz')
  findOne(@MessageBody() id: number) {
    return this.quizService.findOne(id);
  }

  @SubscribeMessage('updateQuiz')
  update(@MessageBody() updateQuizDto: UpdateQuizDto) {
    this.wss.emit('findAllQuiz', this.findAll())
    return this.quizService.update(updateQuizDto.id, updateQuizDto);
  }

  @SubscribeMessage('removeQuiz')
  remove(@MessageBody() id: number) {
    return this.quizService.remove(id);
  }
}
