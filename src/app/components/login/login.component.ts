import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;
  enablePassword: boolean = false;
  loading = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    )
  {
    this.initForm();
  }

  ngOnInit(): void {  
    $('.pageContent').removeClass('slidePage');
  }

  get f() { return this.loginForm.controls; }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  viewPassword() {
    this.enablePassword = this.enablePassword ? false : true;
  }

  onSubmit(){
    this.router.navigate(['dashboard']);
    
  }

  onClickReg(){

  }


}
