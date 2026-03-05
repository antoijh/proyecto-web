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
    IonList,IonRouterLink } from '@ionic/angular/standalone';
import { UserService } from '../services/user.services';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-maestro-home',
  templateUrl: './maestro-home.page.html',
  styleUrls: ['./maestro-home.page.scss'],
  standalone: true,
  imports: [IonContent, RouterLink, IonCard, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonMenu, IonLabel, IonAvatar, IonButtons, IonMenuButton, IonCardHeader, IonCardTitle, IonCardContent]
})
export class MaestroHomePage implements OnInit {
  avatar = "";
  nombre = "";
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.nombre = this.userService.getNombre();
    this.avatar = this.userService.getAvatar();
  }

}
