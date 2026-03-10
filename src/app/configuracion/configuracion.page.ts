import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonLabel, IonButton, IonItem, IonList, IonAvatar} from '@ionic/angular/standalone';
import { UserService } from '../services/user.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonLabel, IonButton, IonItem, IonList, IonAvatar]
})
export class ConfiguracionPage implements OnInit {
  tipoUsuario: string = "";
  avatar = "";
  nombre : string = "";
  correo: string = "";
  password: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.nombre = this.userService.getNombre();
    this.correo = this.userService.getCorreo();
    this.password = this.userService.getPassword();
    this.tipoUsuario = this.userService.getTipoUsuario();
  }
    guardarCambios() {

    if(!this.nombre || !this.correo || !this.password){
      alert("Completa todos los campos");
      return;
    }
    else if (this.tipoUsuario === "maestro" ){
      this.userService.setNombre(this.nombre);
      this.router.navigate(['/maestro-home']);
    }
    else{
      this.userService.setNombre(this.nombre);
      this.router.navigate(['/home']);
    }
    alert("Datos actualizados correctamente");
  }

}
