import { Pipe, PipeTransform }  from '@angular/core';
import { FotoComponent }  from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    transform(fotos : FotoComponent[], digitado : string) {
        
        return fotos.filter(foto => {            

            if(foto.titulo != null){
                return foto.titulo.toLowerCase().includes(digitado);
            } else {
                return '';
            }                
        });
        
    }
}