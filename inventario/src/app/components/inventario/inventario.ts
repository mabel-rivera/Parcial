import { Component } from '@angular/core';
import { Producto, ProductoModule } from '../../modules/producto/producto-module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [ ProductoModule, CommonModule, FormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})



export class InventarioComponent  {
  
  productos: Producto[] = [];
  producto: Producto = { id: 0, nombre: '', cantidad: 0, precio: 0 };
  editando = false;
  idEditando: number | null = null;

  agregarProducto() {
  if (!this.producto.nombre || !this.producto.cantidad || !this.producto.precio) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(this.producto.nombre);
  if (!nombreValido) {
    alert('El nombre no es valido');
    return;
  }

  if (this.editando && this.idEditando !== null) {
    const index = this.productos.findIndex(p => p.id === this.idEditando);
    if (index !== -1) {
      this.productos[index] = { ...this.producto, id: this.idEditando };
    }
    this.editando = false;
    this.idEditando = null;
  } 
  
  else {
    const nuevo: Producto = { ...this.producto, id: Date.now() };
    this.productos.push(nuevo);
  }

  this.limpiarFormulario();
}


  editarProducto(id: number) {
    const prod = this.productos.find(p => p.id === id);
    if (prod) {
      this.producto = { ...prod };
      this.idEditando = id;
      this.editando = true;
    }
  }

  eliminarProducto(id: number) {
  const confirmar = confirm('¿Está seguro de eliminar este producto?');
  if (confirmar) {
    this.productos = this.productos.filter(p => p.id !== id);
    alert('Producto eliminado correctamente.');
  }
}


  limpiarFormulario() {
    this.producto = { id: 0, nombre: '', cantidad: 0, precio: 0 };
  }

}

