import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	curso: string

  constructor(private ususarioService: UsuarioService, private activatedRoute: ActivatedRoute) {
  
  	this.curso= this.activatedRoute.params.value.curso
    this.ususarioService.getAlumnos(this.curso).then((res)=>{

    	console.log(res.json())

    })
   }

  ngOnInit() {
  }

}
