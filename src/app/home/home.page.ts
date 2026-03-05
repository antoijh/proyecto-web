import { Component } from '@angular/core';
import { UserService } from '../services/user';

import { RouterLink } from '@angular/router';
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
  IonButtons,
  IonNavLink,
  IonAvatar,
   IonLabel,
   IonList
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, 
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
    RouterLink ,
    IonAvatar, IonLabel ,
    IonList  
  ],
})
export class HomePage {

  selectedDate: string = '';
  tipoUsuario: string = "";
  avatar = "";
  nombre = "";

 constructor(private UserService : UserService){}


  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }

ngOnInit(){
  this.avatar = this.UserService.getAvatar();
  this.nombre = this.UserService.getNombre();
}
}