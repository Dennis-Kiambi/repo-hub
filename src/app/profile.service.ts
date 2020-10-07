import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId: 'Iv1.f6ce4c05d4d8584a';
  private clientSecret: '57c116616ead631982e016e9d2d859a3b35e448e';

  constructor(private http: HttpClient) {
    console.log('Service is now ready')
    this.username = 'Dennis-Kiambi';
  }

  getProfileData() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret' + this.clientSecret)
    // .subscribe(getProfileData => this.getProfileData());
  }

  getRepository() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
