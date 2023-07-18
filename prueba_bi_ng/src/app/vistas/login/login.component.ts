import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  })
  constructor(private router:Router) {}
  ngOnInit(): void {}

  onLogin(form : FormGroup) {
    console.log(form.value.usuario);
    console.log(form.value.contrasena);
    this.router.navigate(['dashboard']);
  }
}


