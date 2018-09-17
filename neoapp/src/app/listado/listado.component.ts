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
  parametros: any
  constructor(private ususarioService: UsuarioService, private activatedRoute: ActivatedRoute) {
  
    this.parametros = this.activatedRoute.params.subscribe(params =>{

      this.curso = params.curso


    })



    this.ususarioService.getAlumnos(this.curso).then((res)=>{

    	console.log(res.json())

    })
   }

  ngOnInit() {
  }

}
