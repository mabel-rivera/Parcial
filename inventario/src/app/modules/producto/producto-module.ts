import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventarioComponent} from '../../components/inventario/inventario';


@NgModule({
  declarations: [] ,
  imports: [
    CommonModule, FormsModule, InventarioComponent
  ]
})
export class ProductoModule { 


}

export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

