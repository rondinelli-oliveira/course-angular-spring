import { Component } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: 1, name: 'Teste1', category: 'teste1'},
    {_id: 2, name: 'Teste2', category: 'teste2'},
    {_id: 3, name: 'Teste3', category: 'teste3'},
    {_id: 4, name: 'Teste4', category: 'teste4'},
    {_id: 5, name: 'Teste5', category: 'teste5'},
    {_id: 6, name: 'Teste6', category: 'teste6'},
    {_id: 7, name: 'Teste7', category: 'teste7'},
    {_id: 8, name: 'Teste8', category: 'teste8'},
    {_id: 9, name: 'Teste9', category: 'teste9'},
    {_id: 10, name: 'Teste10', category: 'teste10'},
    {_id: 11, name: 'Teste11', category: 'teste11'},
    {_id: 12, name: 'Teste12', category: 'teste12'},
    {_id: 13, name: 'Teste13', category: 'teste13'},
    {_id: 14, name: 'Teste14', category: 'teste14'},
    {_id: 15, name: 'Teste15', category: 'teste15'},
  ];
  displayedColumns = ['_id', 'name', 'category'];
}
