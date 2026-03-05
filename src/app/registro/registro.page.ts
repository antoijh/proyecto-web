import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonInput, IonButton,
  IonAvatar
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';
import { UserService } from '../services/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonInput, IonButton, IonAvatar,
    RouterLink
  ]
})
export class RegistroPage implements OnInit {

  constructor(private   UserServivce:UserService) {}

  imagenPreview: string | ArrayBuffer | null = null;

  seleccionarImagen(event: any) {

    const archivo = event.target.files[0];

    if (archivo) {

      const lector = new FileReader();

      lector.onload = () => {
        this.imagenPreview = lector.result;
        this.UserServivce.setAvatar(lector.result as string);
      };

      lector.readAsDataURL(archivo);
    }
  }

  ngOnInit() {}

  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  telefono: string = "";
  password: string = "";
  confirmPassword: string = "";

  registrarse() {

    if (!this.nombre || !this.apellido || !this.correo || !this.telefono || !this.password || !this.confirmPassword) {
      alert("Por favor llena todos los campos");
      return;
    }

    alert("Registro completado correctamente");
  }
}