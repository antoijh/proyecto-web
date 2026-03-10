import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.services'; 

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule]
})
export class MateriasPage implements OnInit {

  avatar = "";
  nombre = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.avatar = this.userService.getAvatar();
    this.nombre = this.userService.getNombre();
  }

}