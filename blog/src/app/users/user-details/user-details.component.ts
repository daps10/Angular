import { Component, OnInit } from '@angular/core';
// TO read the parameter we can use the activated route
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  public userId: any ;
  // Inject ActivateRoute
  constructor(private activatedRoute:ActivatedRoute) { 
    const Id = this.activatedRoute.snapshot.paramMap.get("id");
    this.userId = Id
  }

  ngOnInit(): void {

  }

}
