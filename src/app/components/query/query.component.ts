import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IQuestion, IResponse, IUser } from 'src/app/interfaces/users-and-questions';
import { TestUsersAndQuestionsService } from 'src/app/services/test-users-and-questions.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  questions: IQuestion[] = [];
  query: { [key: string]: string } = { "1": "0", "2": "0" };
  count = 0;
  responses: IResponse[] = [];
  constructor(private db: TestUsersAndQuestionsService) { }

  ngOnInit(): void {
    this.db.getQuestions().subscribe(Q => {
      this.questions = Q;
    })
  }
  selectChangeHandler(selected: { selected: string, Qid: string }) {
    this.query[selected.Qid] = selected.selected;
    this.count = 0;
    this.responses = [];
    
    Object.keys(this.query).forEach(Qid => { 
      this.db.getResponses(Qid, this.query[Qid]).subscribe(Q => {
        console.log(Q);
        
        this.responses.push(...Q);
        this.count += Q.length;
      })
    })
    console.log(this.count,this.responses);
    
  }

}
