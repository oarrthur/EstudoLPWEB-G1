import { NoticiaService } from './../noticia.service';
import { Router } from '@angular/router';
import { Noticia } from './../noticia.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  noticia = new Noticia(null, null, null, null, null);

  constructor(private servicoNoticia: NoticiaService, private router: Router) { }

  ngOnInit() {
    
  }

  salvar(){    
    this.servicoNoticia.cadastrar(this.noticia);
    this.router.navigate(['']);
  };

}
