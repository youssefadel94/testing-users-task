import { Component, OnInit } from '@angular/core';
import { TestUsersAndQuestionsService } from 'src/app/services/test-users-and-questions.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private db: TestUsersAndQuestionsService) { }

  ngOnInit(): void {
  }

}
