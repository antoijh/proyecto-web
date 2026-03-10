import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonNavLink} from '@ionic/angular';
import { UserService } from '../services/user.services';
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

  constructor(private router: Router, private userService : UserService) {}
  login() {

    // Credenciales falsas
    const nombre= "Usuario";    
    const correoCorrectomaestro = "admin@gmail.com";
    const passwordCorrecta = "1234";
    const tipoUsuarioMaestro = "maestro";
    const nombreAlumno = "Alumno";
    const correoCorrectoalumno = "alumno@gmail.com";
    const passwordCorrectoalumno = "4321";
    const tipoUsuarioAlumno = "alumno";
   
    if (this.correo === correoCorrectomaestro && this.password === passwordCorrecta && tipoUsuarioMaestro === "maestro") {

      this.error = '';
      this.router.navigate(['/maestro-home']);
      this.userService.setNombre(nombre);
      this.userService.setcorreo(correoCorrectomaestro);
      this.userService.setPassword(passwordCorrecta);
    } 
    else if (this.correo === correoCorrectoalumno && this.password === passwordCorrectoalumno && tipoUsuarioAlumno === "alumno") {

      this.error = '';
      this.router.navigate(['/home']);
      this.userService.setNombre(nombreAlumno);
      this.userService.setcorreo(correoCorrectoalumno);
      this.userService.setPassword(passwordCorrectoalumno);
    }
    else {
      this.error = "Credenciales incorrectas";
    }
  }
}