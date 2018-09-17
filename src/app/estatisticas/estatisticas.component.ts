import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticia.service';
import { Noticia } from '../noticia.model';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  autor = '';
  porcetagem = [];

  constructor(private servicoNoticia: NoticiaService, private router: Router) { }

  ngOnInit() {
    this.autor = this.servicoNoticia.maisPublicou();
    this.porcetagem = this.servicoNoticia.porcentagemTags();
  }

}
