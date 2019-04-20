import { Injectable } from '@angular/core';
import { Questions } from '../shared/questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Questions[] = [
    {
      question: 'Spiders have six legs.',
      answer: false
    },
    {
      question: 'Sharks are mammals?',
      answer: false
    },
    {
      question: 'Atomic bombs work by atomic fission?',
      answer: true
    },
    {
      question: 'Conductors have low resistance.',
      answer: true
    },
    {
      question: 'The human skeleton is made up of less than 100 bones.',
      answer: true
    },

  ]
  constructor() { }



}


