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
  query: { [key: string]: string } = {};
  count = 0;
  responses: IResponse[] = [];
  users: IUser[] = [];
  constructor(private db: TestUsersAndQuestionsService) { }

  ngOnInit(): void {
    this.db.getQuestions().subscribe(Q => {
      this.questions = Q;
      Q.forEach(q => {
        this.query[q.id] = "-1";
      })
    })
    // this.selectChangeHandler({ selected: "0", Qid: "0" })
  }
  selectChangeHandler(selected: { selected: string, Qid: string }) {
    this.query[selected.Qid] = selected.selected;
    this.count = 0;
    this.responses = [];
    // const filteredArray = array1.filter(value => array2.includes(value));
    Object.keys(this.query).forEach(Qid => {
      if (this.query[Qid] != "-1") {
        this.db.getResponses(Qid, this.query[Qid]).subscribe(Q => {
        //  console.log(Q);
          this.responses.length == 0 ?
            this.responses.push(...Q) :
            this.responses = this.responses.filter(n => Q.some(n2 => n.userId == n2.userId));
          this.count = this.responses.length;
          this.getUsers();
        //  console.log(this.responses);

        }, (error) => {
          throw new Error(error);
        }, () => {
          // console.log(this.responses);
        })
      }
    })
  //  console.log(this.count, this.responses);

  }
  getUsers() {
    if(this.responses.length!=0)
    this.db.getUsersById(this.responses).subscribe((U: IUser[]) => {
      this.users = U;
    } )
  }
}
