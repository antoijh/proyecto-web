import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  avatar: string = "";
  nombre: string = "";
  correo: string = "";
  password: string = "";

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
 getCorreo(){
    return this.correo;
  }
  getPassword(){
    return this.password;
  }
  setcorreo(correo: string){
    this.correo = correo;
  }
  setPassword(password: string){
    this.password = password;
  }
}
