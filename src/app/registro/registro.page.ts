import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {   IonHeader, IonToolbar,  IonTitle,  IonContent,  IonCard,  IonCardHeader,  IonCardTitle,  IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonAvatar, IonRouterLink} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonAvatar, RouterLink]
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imagenPreview: string | ArrayBuffer | null = null;

  seleccionarImagen(event: any) {
    const archivo = event.target.files[0];

    if (archivo) {
      const lector = new FileReader();

      lector.onload = () => {
        this.imagenPreview = lector.result;
      };

      lector.readAsDataURL(archivo);
    }
  }
}
