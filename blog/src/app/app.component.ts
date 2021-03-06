import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  // Strings
  yourname ="daps chavhan";
  //  onclick call function .
  getName(name: any){
    alert(name)
  }

  // ############ Example for interpolation start #######//

  // // Strings
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
  data="Testing";

  constructor (private viewContainer:ViewContainerRef, 
      private cfr: ComponentFactoryResolver
    ) { }

  // load the function
  async loadAdmin(){
    this.viewContainer.clear(); // Clear the used component.

    // load the component which we gonna use.
    const { LoginComponent } = await import('./admin/login/login.component');
    
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    )

  }

  // load the function
  async loadAdminList(){
    this.viewContainer.clear(); // Clear the used component.

    // load the component which we gonna use.
    const { ProfileComponent } = await import('./admin/profile/profile.component');
    
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(ProfileComponent)
    )

  }
}
