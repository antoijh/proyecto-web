import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServivce {
  
  avatar: string = "";

  constructor() { }

  setAvatar(img: string){
    this.avatar = img;
  }

  getAvatar(){
    return this.avatar;
  }
}
