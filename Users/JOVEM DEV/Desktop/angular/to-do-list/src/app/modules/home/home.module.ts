import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponentComponent,
    TodoButtonDeleteAllComponent,
    TodoListComponent,
    InputAddItensComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
