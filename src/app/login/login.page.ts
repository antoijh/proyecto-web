import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonNavLink} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterLink]
})
export class LoginPage {

  correo: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {

    // Credenciales falsas
    const correoCorrectomaestro = "admin@gmail.com";
    const passwordCorrecta = "1234";
    const tipoUsuarioMaestro = "maestro";
    const correoCorrectoalumno = "alumno@gmail.com";
    const passwordCorrectoalumno = "4321";
    const tipoUsuarioAlumno = "alumno";
   
    if (this.correo === correoCorrectomaestro && this.password === passwordCorrecta && tipoUsuarioMaestro === "maestro") {

      this.error = '';
      this.router.navigate(['/maestro-home']);

    } 
    else if (this.correo === correoCorrectoalumno && this.password === passwordCorrectoalumno && tipoUsuarioAlumno === "alumno") {

      this.error = '';
      this.router.navigate(['/home']);
    }
    else {
      this.error = "Credenciales incorrectas";
    }
  }
}