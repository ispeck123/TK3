import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,private apiService:ApiService, private toastr: ToastrService
    )
  {
    // this.initForm();
  }


  private initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {  
    $('.pageContent').removeClass('slidePage');
    this.initForm();
  }
  
  get g() { return this.loginForm.controls; }

  viewPassword() {
    this.enablePassword = this.enablePassword ? false : true;
  }

  onSubmit(){
    this.submitted = true;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      this.toastr.error("Fields are required !", 'ALERT !');
      return;
    }
    else {
      this.router.navigate(['dashboard']);
      // this.apiService.loginValidationService(data).subscribe(resp=>{
      //   console.log(data)
      // });
    }
  }

  onClickReg(){

  }


}
