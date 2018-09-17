import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { NaoencontradoComponent } from 'src/app/naoencontrado/naoencontrado.component';

const rotas: Routes = [
  {path: 'cadastrar', component: CadastrarComponent },
  {path: 'estatisticas', component: EstatisticasComponent },
  {path: '', component: NoticiasComponent},
  {path: '**', component: NaoencontradoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    NoticiasComponent,
    EstatisticasComponent,
    NaoencontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
