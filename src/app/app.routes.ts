import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component.js';

export const routes: Routes = [
  { 
    path: '', 
    component: MasterLayoutComponent,
    loadChildren: () => import('./pages/home/home.routes').then(c => c.routes)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoComponent)
  },
  {
    path: 'todo/:id',
    loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoComponent)
  }, 
  {
    path: 'todo/:id/:name',
    loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoComponent)
  }
];
