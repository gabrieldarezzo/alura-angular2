import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';


@Component({
    moduleId : module.id, 
    selector : 'listagem', 
    templateUrl : './listagem.component.html',
})

export class ListagemComponent { 
    
    fotos : FotoComponent[] = [];
    service : FotoService;
    mensagem : string = '';
    
    constructor (service : FotoService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(fotos => {            
                this.fotos = fotos;
            }, error => console.log('error:', error));        
    }

    remove(foto) {
        
        this.service
            .remove(foto)
            .subscribe(json => {

                let indece = this.fotos.indexOf(foto);
                let novasFotos = this.fotos.slice(0);
                novasFotos.splice(indece, 1);
                this.fotos = novasFotos;

                this.mensagem = 'Foto removida com sucesso';
                

            },
            error => {
                console.log(error)
                this.mensagem = 'Não foi possivel remover a foto';
            });
    
    }
}