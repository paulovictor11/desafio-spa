import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { InitComponent } from './pages/endereco/init/init.component';
import { StoreComponent } from './pages/endereco/store/store.component';
import { EditComponent } from './pages/endereco/edit/edit.component';
import { ShowComponent } from './pages/endereco/show/show.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: EnderecoComponent,
        children: [
            { path: '', component: InitComponent, canActivate: [AuthGuard] },
            { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
            { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
            { path: 'show/:cep', component: ShowComponent, canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        useHash: true
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }