import { Component } from '@angular/core';

// Import services
import { DummyServicesService } from '../../dummy-services.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

  // create similar instance of contructor
  data:any=[];
  constructor(private todo: DummyServicesService) { 
    
    this.todo.getTodosData().subscribe(data => {
      this.data=data;
    })
  }


}
