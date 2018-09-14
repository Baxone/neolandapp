import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulariologin: FormGroup


  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formulariologin = new FormGroup({
      alias: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),

    })
  }

  ngOnInit() {
  }

  login() {
    this.usuarioService.getUsuarios(this.formulariologin.value).then((res)=>{
      console.log(res.json())
      let user= res.json().alias
      
      if(user=='profe'){
        this.router.navigate(['/cursos'])
      }

    })
  }
}
