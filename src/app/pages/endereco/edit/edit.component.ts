import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoService } from 'src/app/shared/services/endereco.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    model: any;
    modelId: any;
    modelForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: EnderecoService
    ) { }

    ngOnInit(): void {
        this.modelId = this.route.snapshot.params.id;

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

        this.show();
    }

    show() {
        this.service.show(this.modelId).subscribe(model => {
            console.log(model);
            this.mount(model);
        });
    }

    mount(data) {
        this.modelForm.setValue({
            endereco: data.endereco,
            numero: data.numero,
            complemento: data.complemento,
            cep: data.cep,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            latitude: data.latitude,
            longitude: data.longitude
        });
    }

    getCep(cep) {
        this.service.searchByCEP(cep).subscribe(res => {
            this.modelForm.setValue({
                endereco: res.endereco,
                numero: res.numero,
                complemento: res.complemento,
                cep: res.cep,
                bairro: res.bairro,
                cidade: res.cidade,
                estado: res.estado,
                latitude: res.latitude,
                longitude: res.longitude
            });
        })
    }

    update(form: any) {
        this.service.update(this.modelId, form).subscribe(
            response => {
                console.log(response);
                this.router.navigate([''])
            },
            err => console.log(err)
        )
    }
}
