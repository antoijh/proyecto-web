import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  avatar: string = "";
  nombre: string = "";

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
 setNombre(name: string){
    this.nombre = name;
  }

  getNombre(){
    return this.nombre;
  }
}
