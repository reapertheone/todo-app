import { Component, OnInit } from '@angular/core';
import {Todo} from './../../Models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodo:string="";
  editMode:boolean=false;
  id:number=0;

  constructor() { }

 
  ngOnInit(): void {
    this.todos=[
      {
        content:"asdasd",
        done:false
      },
      {
        content:"trallala",
        done:true
      }
    ]
  }

  remove(id:number):void{
    this.todos=this.todos.filter((v,i)=>{
      return i!==id
    })
  }

  addTodo(){
    this.todos.push({content:this.inputTodo,done:false})
    this.inputTodo=""
  }

  toggleDone(id:number):void {
    this.todos.map((todo,i)=>{
      if(i===id) todo.done=!todo.done;
      return todo;
    })
  }

  edit(id:number):void{
    this.editMode=!this.editMode
    this.todos[id].content=this.inputTodo
    this.inputTodo=""

  }

  editModeOn(id:number):void{
    this.editMode=true
    this.inputTodo=this.todos[id].content
    this.id=id
  }

}
