import { Component } from '@angular/core';
import { UserServivce } from '../services/user';

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
   IonLabel
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
    IonAvatar, IonLabel    
  ],
})
export class HomePage {

  selectedDate: string = '';
  tipoUsuario: string = "";
  avatar = "";

 constructor(private userService: UserServivce){}


  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }

ngOnInit(){
  this.avatar = this.userService.getAvatar();
    this.tipoUsuario = this.userService.getTipoUsuario();
}
}