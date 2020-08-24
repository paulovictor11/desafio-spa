import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { RegisterComponent } from './pages/register/register.component';
import { InitComponent } from './pages/endereco/init/init.component';
import { StoreComponent } from './pages/endereco/store/store.component';
import { EditComponent } from './pages/endereco/edit/edit.component';
import { ShowComponent } from './pages/endereco/show/show.component';
import { EnderecoService } from './shared/services/endereco.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';

registerLocaleData(pt);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EnderecoComponent,
        RegisterComponent,
        InitComponent,
        StoreComponent,
        EditComponent,
        ShowComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        Ng2SearchPipeModule,
        LeafletModule,
        NzCardModule,
        NzInputModule,
        NzSpaceModule,
        NzButtonModule,
        NzTableModule,
        NzFormModule,
        NzIconModule,
        NzProgressModule,
        NzTabsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: pt_BR }, EnderecoService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
