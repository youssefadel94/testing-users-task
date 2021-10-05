import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input()
  options!: Array<any>;
  @Input()
  header!: string;
  @Input()
  Qid!: string;
  @Output() selectChange = new EventEmitter();
  selected = "-1";
  constructor() {
    this.selected = "-1";
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onSelect() {
    this.selectChange.emit({ selected: this.selected, Qid: this.Qid });
  }
}
