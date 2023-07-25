import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  filteredProducts:any[]=[]
  transform(products:any[],search:string): any[] {

    return products.filter((product)=>{return product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())});

  }

}
