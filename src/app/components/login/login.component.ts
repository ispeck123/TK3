import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  login_data:any;
  spinnerShow: boolean = false;


  constructor(private formBuilder: FormBuilder,private router: Router,private apiService:ApiService, private toastr: ToastrService) {}

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
    this.spinnerShow=true;
    this.loginForm.markAllAsTouched();
    this.login_data = this.loginForm.value;
    console.log("this.login_data",this.login_data)
    if (this.loginForm.invalid) {
      this.spinnerShow=false;
      this.toastr.error("Fields are Required !", 'ALERT !');
      return;
    }
    else {
      this.apiService.loginValidationService(this.login_data).subscribe(resp=>{
        console.log("this.login_data",resp);
        if(resp.result === 0)
          {
            this.spinnerShow=false;
            this.toastr.success(resp.msg);
            this.router.navigate(['dashboard']);
          }
          else
          {
            this.toastr.error(resp.msg,'Alert !');
            this.spinnerShow=false;
          }
      });
    }
  }

  onClickReg(){

  }


}
