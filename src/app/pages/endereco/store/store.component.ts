import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/shared/services/endereco.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

    modelForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: EnderecoService
    ) { }

    ngOnInit(): void {
        this.modelForm = this.formBuilder.group({
            endereco: this.formBuilder.control('', [Validators.required]),
            numero: this.formBuilder.control('', [Validators.required]),
            complemento: this.formBuilder.control('', [Validators.required]),
            cep: this.formBuilder.control('', [Validators.required]),
            bairro: this.formBuilder.control('', [Validators.required]),
            cidade: this.formBuilder.control('', [Validators.required]),
            estado: this.formBuilder.control('', [Validators.required]),
            latitude: this.formBuilder.control('', [Validators.required]),
            longitude: this.formBuilder.control('', [Validators.required]),
        });
    }

    store(form: any) {
        this.service.store(form).subscribe(
            response => {
                console.log(response);
                this.router.navigate(['']);
            },
            err => console.log(err)
        )
    }

    getCep(cep) {
        this.service.searchByCEP(cep).subscribe(res => {
            console.log(res);

            this.modelForm.setValue({
                endereco: res.logradouro ?? '',
                numero: res.numero ?? '',
                complemento: res.complemento ?? '',
                cep: res.cep ?? '',
                bairro: res.bairro ?? '',
                cidade: res.cidade.nome ?? '',
                estado: res.estado.sigla ?? '',
                latitude: res.latitude ?? '',
                longitude: res.longitude ?? ''
            });
        });
    }

}
