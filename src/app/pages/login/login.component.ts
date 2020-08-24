import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    modelForm: FormGroup;
    email: any;
    password: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: AuthService
    ) { }

    ngOnInit(): void {
        this.modelForm = this.formBuilder.group({
            username: this.formBuilder.control('', [Validators.required]),
            password: this.formBuilder.control('', [Validators.required])
        });
    }

    onLoggedin(response) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
    }


    login(form: any) {
        this.service.login(form).subscribe(
            response => {
                console.log(response);
                this.onLoggedin(response);
            },
            err => console.log(err)
        )
    }

}
