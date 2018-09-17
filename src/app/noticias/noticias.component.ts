import { NoticiaService } from './../noticia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias = null;
  

  /* Para injetar um serviço (ou uma dependência no caso DI) é feito como paramêtro no construtor. */
  constructor(private servicoNoticia: NoticiaService, private router: Router) { }

  ngOnInit() {
    this.noticias = this.servicoNoticia.todasNoticias();
  }

}
