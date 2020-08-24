import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    modelForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: AuthService
    ) { }

    ngOnInit(): void {
        this.modelForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required]),
            email: this.formBuilder.control('', [Validators.required]),
            password: this.formBuilder.control('', [Validators.required])
        });
    }

    onSignin(response) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
    }

    register(form: any) {
        this.service.signIn(form).subscribe(
            response => {
                console.log(response);
                this.onSignin(response);
            },
            err => console.log(err)
        )
    }

}
