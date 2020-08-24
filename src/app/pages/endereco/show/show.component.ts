import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import * as L from 'leaflet';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    modelId: any;
    modelCep: any;
    modelForm: FormGroup;

    lat: any;
    long: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: EnderecoService
    ) { }

    ngOnInit(): void {
        this.modelCep = this.route.snapshot.params.cep;

        this.modelForm = this.formBuilder.group({
            endereco: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            numero: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            complemento: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            cep: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            bairro: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            cidade: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
            estado: this.formBuilder.control({ value: '', disabled: true }, [Validators.required]),
        });

        this.show();
    }

    show() {
        this.service.showByCep(this.modelCep).subscribe(model => {
            this.mount(model)
            this.initMap(model);
        });
    }

    initMap(data) {
        var myMap = L.map('mapid').setView([data.latitude, data.longitude], 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(myMap);

        var marker = L.marker([data.latitude, data.longitude]).addTo(myMap);
    }

    mount(data) {
        this.modelForm.setValue({
            endereco: data.endereco,
            numero: data.numero,
            complemento: data.complemento,
            cep: data.cep,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado
        });
        this.modelId = data.id;
    }

}
