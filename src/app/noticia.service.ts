import { Noticia } from './noticia.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  lista: Array<Noticia> = [];

  constructor() {
    this.lista.push(new Noticia(
      1, 'Teste de Noticia', ['Esportes'], 'Arthur', 'Flamengo perdeu'
    ))
    this.lista.push(new Noticia(
      2, 'Teste de Noticia 2', ['Moda'], 'Arthur', 'Novo desfile'
    ))
    this.lista.push(new Noticia(
      3, 'Teste de Noticia 3', ['Tecnologia'], 'Paulo', 'Novo concurso'
    ))
    this.lista.push(new Noticia(
      4, 'Teste de Noticia 4', ['Tecnologia'], 'Paulo', 'Novo Celular'
    ))
    this.lista.push(new Noticia(
      5, 'Teste de Noticia 5', ['Tecnologia'], 'Paulo', 'Nova linguagem'
    ))
  }
  /**
   * todasNoticias: Retorna todas as notícias.
   */
  public todasNoticias() {
    return this.lista;
  }
  /**
   * cadastrar : Salva a notícia no array, já a do controler apenas envia para o serviço.
   */
  public cadastrar(noticia) {
    noticia.id = this.lista.length + 1;
    this.lista.push(noticia);
  }
  /**
   * maisPublicou: Retorna o nome do autor que mais publicou notícias.
   */
  public maisPublicou() {
    const frequency = this.lista
      .map(({ autor }) => autor)
      .reduce((autores, autor) => {
        const count = autores[autor] || 0;
        autores[autor] = count + 1;
        return autores;
      }, {});
    var qt = 0;
    var autorM = '';
    for (var key in frequency) {
      if (frequency[key] > qt) {
        qt = frequency[key];
        autorM = key;
      }
    }
    return autorM;
  }

  public porcentagemTags(){
    var tags = [];
    var totalTags = 0;
    for(let noticia of this.lista){
      for(let tag of noticia.tags){
        if(tags[tag] == null){
          tags[tag] = 1;
        }
        else{
          tags[tag] ++ ;
        }
        totalTags +=1;
      }
    }
    var tagsArray = []
    for(let key in tags){
      console.log(tags)
      tagsArray.push([key , tags[key] * 100 / totalTags])
    }
    return tagsArray;
  }

}
