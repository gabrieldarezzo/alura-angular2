import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BotaoModule } from './botao/botao.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      FotoModule,
      PainelModule,
      routing,
      FormsModule,
      ReactiveFormsModule,
      BotaoModule
  ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule { }