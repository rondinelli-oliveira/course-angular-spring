import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: 1, name: 'Teste1', category: 'teste1'},
      {_id: 2, name: 'Teste2', category: 'teste2'},
      {_id: 3, name: 'Teste3', category: 'teste3'},
      {_id: 4, name: 'Teste4', category: 'teste4'},
      {_id: 5, name: 'Teste5', category: 'teste5'},
      {_id: 6, name: 'Teste6', category: 'teste6'},
    ];
  }
}
