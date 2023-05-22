import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  // 1 - Properties
  // 2 - Constructor
  // 3 - Methods

  // Life cycle hooks
  // -- 1 - Constructor
  // -- 2 - 
  title = 'client';
  users: any;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }
  
  private getUsers() {
    this.http.get("http://localhost:5062/api/users").subscribe({
      next: response => this.users = response, 
      error: error => console.log(error), 
      complete: () => console.log("Request has completed")
    })
  }
  

}
