import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  titlePage : string = "Sign In"
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      ruolo: new FormControl(),
    });
  }
 signIn(){
  this.router.navigate(['registrazione']);
  } 

}
