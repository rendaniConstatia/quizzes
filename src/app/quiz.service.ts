import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    },
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    },
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    },
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    },
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    },
    {
      question : 'what is the capital of gauteng',
      answer: [
        {option: 'johannesburg', correct: false},
        {option: 'cape town', correct: false},
        {option: 'Durban', correct: true}
      ]
    }
  ]

  constructor() { }
    getQuizzes(){
      return this.quizzes;
  }
}
