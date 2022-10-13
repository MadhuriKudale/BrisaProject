import { Component } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My Angular App';
  public isAuthenticated: boolean;

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  constructor(public oktaAuth: OktaAuthService) { this.oktaAuth.$authenticationState.subscribe(
    (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
  );
    this.isAuthenticated = false;
  }

   async login() {
    await this.oktaAuth.signInWithRedirect();
  }

   async logout() {
    await this.oktaAuth.signOut(); 
  }
}