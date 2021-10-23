import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  

  // ############ Example for interpolation start #######//

  // Strings
  // name ="daps chavhan";

  // Functions 
  // test () {
    // return "holla everyone,"

    // If we wanna use existing variable or objects data then 
    // return "Hello" +" "+ this.name;
  // }

  // objects 
  // obj =  {
    // email : "daps.chavhan@yahoo.com",
    // phone_number : 9099081533,
  // }

  // array data :: 
  // hobbies = ["football", "badminton","chess","cricket"];

  // Total amount
  // product1 = 100;
  // product2 = 200;

  // current page's url 
  // siteUrl = window.location.href;

  // ############ Example for interpolation end #######//
}
