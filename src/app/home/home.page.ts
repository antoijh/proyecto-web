import { Component } from '@angular/core';
<<<<<<< HEAD
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent,
  IonDatetime,
  IonItem,
  IonInput,
  IonImg,
  IonMenu,          
  IonMenuButton,    
  IonButtons   
} from '@ionic/angular/standalone';
=======
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel,IonButton, IonRouterLink } from '@ionic/angular/standalone';
>>>>>>> 9b67801acd53e7b6c61a121bd81b84ea8ef0e8d7

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
<<<<<<< HEAD
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    IonDatetime,
    IonItem,
    IonInput,
    IonImg,
    IonMenu,          
    IonMenuButton,   
    IonButtons,       
  ],
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonButton, RouterLink],
>>>>>>> 9b67801acd53e7b6c61a121bd81b84ea8ef0e8d7
})
export class HomePage {

  selectedDate: string = '';

  constructor() {}

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }
}