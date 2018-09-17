import { ArrayType } from "@angular/compiler/src/output/output_ast";

export class Noticia{
    id: number;
    titulo: string;
    tags: Array<string>;
    autor: string;
    conteudo: string;

    constructor(id:number, titulo: string, tags, autor: string, conteudo: string){
        this.id = id;
        this.titulo = titulo;
        this.tags = tags;
        this.autor = autor;
        this.conteudo = conteudo;
    }
    /* Os getters e seters ficam aqui abaixo */
}
