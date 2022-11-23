import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

const questions = [
  {
    id: 1,
    question: 'What year it is',
  },
  {
    id: 2,
    question: 'What day it is'
  }
]

const answers = []

@Injectable()
export class QuizService {
  create(createQuizDto: CreateQuizDto) {
    return 'This action adds a new quiz';
  }

  findAll() {

    return {questions, answers}
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    answers.push(updateQuizDto)
    return answers
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
