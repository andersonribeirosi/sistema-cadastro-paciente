import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'anderson@gmail.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      alert('Logado com sucesso!');
      this.router.navigate(['/pagina-inicial']);
    } else {
      alert('Acesso Negado!');
      this.usuarioAutenticado = false;
      usuario.nome = '';
      usuario.senha = '';

    }

  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
