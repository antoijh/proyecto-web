import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';

import { RouterLink, RouterModule } from '@angular/router';
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
  IonMenu,          
  IonMenuButton,    
  IonButtons,
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
    IonMenu,          
    IonMenuButton,   
    IonButtons,  
    RouterLink ,
    IonAvatar, 
    IonList , RouterModule
  ],
})
 export class HomePage implements OnInit {

  selectedDate: string = '';
  tipoUsuario: string = "";
  avatar = "";
  nombre = "";

 constructor(private userService : UserService){}


  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }

 ngOnInit(){
  this.avatar = this.userService.getAvatar();
  this.nombre = this.userService.getNombre();
 }
}