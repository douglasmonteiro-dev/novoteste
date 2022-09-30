import { CommonModule, registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { AbrirAgendaComponent } from './abrir-agenda/abrir-agenda.component';
import { ServicosComponent } from './servicos/servicos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuModule } from '../shared/menu/menu.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AboutComponent } from './about/about.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CalendarCommonModule, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import ptBr from '@angular/common/locales/pt';
import { MatNativeDateModule } from '@angular/material/core';

// import { AgmCoreModule } from '@agm/core';

const maskConfig: Partial<IConfig> = {
  validation: true,
  
};
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    HomeComponent,
    Page404Component,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AboutComponent,
    AgendaComponent,
    AgendamentoComponent,
    OrcamentoComponent,
    AbrirAgendaComponent,
    ServicosComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    MenuModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(maskConfig),
    CalendarCommonModule,
    CalendarModule,
    NgxMaterialTimepickerModule,
    // FlatpickrModule.forRoot({locale: ptBr}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    // AgmCoreModule.forRoot({apiKey: 'AIzaSyDfPbNnfE5ktwmYBMuI_S7jH04khiAQomM'})
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, MatDatepickerModule],
})
export class PagesModule { }
