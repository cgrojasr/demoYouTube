import { Injectable } from '@angular/core';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  allStudents(): Student[] {
    const students: Student[] = [
      {
        id: 1,
        name: 'Zinedine Zidane',
        age: 20,
        email: 'zzidane@realmadrid.com',
        picture: ''
      },
      {
        id: 2,
        name: 'Ronaldinho Gaucho',
        age: 21,
        email: 'rgaucho@barcelona.com',
        picture: ''
      }
    ];

    return students;
  }
}
