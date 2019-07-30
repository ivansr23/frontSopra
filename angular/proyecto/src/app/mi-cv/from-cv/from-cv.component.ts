import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-from-cv',
  templateUrl: './from-cv.component.html',
  styleUrls: ['./from-cv.component.css']
})
export class FromCvComponent implements OnInit {
  obj = {
    prop: '',
    value: ''
  };
  @Output() enviarSkill = new EventEmitter<string>();
  @Output() enviarObj = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  enviarTodo(event){
    this.obj.prop = event.target.name;
    this.obj.value = event.target.value;
    this.enviarObj.emit(this.obj);
  }
  
  cogerSkill(ref) {
    this.enviarSkill.emit(ref.value);
    ref.value = '';
  }
}
