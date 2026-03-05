import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class LoginPage {

  correo: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {

    // Credenciales falsas
    const correoCorrecto = "admin@gmail.com";
    const passwordCorrecta = "1234";

    if (this.correo === correoCorrecto && this.password === passwordCorrecta) {

      this.error = '';
      this.router.navigate(['/home']);

    } else {
      this.error = "Credenciales incorrectas";
    }
  }
}