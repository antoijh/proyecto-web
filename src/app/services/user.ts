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
  tipoUsuario: string = "";

setTipoUsuario(tipo: string){
  this.tipoUsuario = tipo;
}

getTipoUsuario(){
  return this.tipoUsuario;
}
}
