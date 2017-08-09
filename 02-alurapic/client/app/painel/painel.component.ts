import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector : 'painel',
    templateUrl : './painel.component.html'

})

export class PainelComponent implements OnInit{
    
    @Input() titulo: string;

    ngOnInit() {        

        let maxStringLenght = 10;
        
        this.titulo = this.titulo.length > maxStringLenght
            ? this.titulo.substr(0, maxStringLenght - 3) + '...' 
            : this.titulo;
    }





}