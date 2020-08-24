import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

    model: any;
    pesquisar: any;

    progress = false;

    constructor(
        private service: EnderecoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.progress = true;
        this.all()
    }

    all() {
        this.service.all().subscribe(model => {
            this.model = model;
            this.progress = false
        });
    }

    delete(id: any) {
        if (confirm('Tem certeza que deseja excluir esse endereço?')) {
            this.progress = true;
            this.service.delete(id).subscribe(
                response => {
                    this.all();
                },
                err => console.log(err)
            )
        }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
