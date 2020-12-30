import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student/student.service';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  students: Student[];

  constructor(
    private studentService: StudentService
  ){}

  ngOnInit(): void {
    this.students = this.studentService.allStudents();
  }
}
