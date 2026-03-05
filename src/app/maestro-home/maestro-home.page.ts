import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonLabel, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    IonItem,
    IonMenu,          
    IonMenuButton,   
    IonButtons,  
    IonAvatar, 
    IonList,IonFab,IonFabButton,IonFabList,IonIcon } from '@ionic/angular/standalone';
import { UserService } from '../services/user.services';
import { RouterLink } from '@angular/router';
import { add } from 'ionicons/icons';
import { book } from 'ionicons/icons';
@Component({
  selector: 'app-maestro-home',
  templateUrl: './maestro-home.page.html',
  styleUrls: ['./maestro-home.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, IonCard, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonMenu, IonLabel, IonAvatar, IonButtons, IonMenuButton, IonCardHeader, IonCardTitle, IonCardContent, IonFab, IonFabButton, IonFabList, IonIcon]
})
export class MaestroHomePage implements OnInit {
  avatar = "";
  nombre = "";
  iconadd = add;
  iconbook = book;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.nombre = this.userService.getNombre();
    this.avatar = this.userService.getAvatar();
  }

}
