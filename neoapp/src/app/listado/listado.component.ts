import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private ususarioService: UsuarioService) {
    this.ususarioService.getAlumnos(`Full Stack`)
   }

  ngOnInit() {
  }

}
