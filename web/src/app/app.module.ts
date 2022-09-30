import { BrowserModule } from '@angular/platform-browser';
import { CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { UserComponent } from './shared/user/user.component';
import { JwtInterceptor } from './services/interceptors/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
