import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { LocalStorageService } from './services/local-storage.service';
import { JsonPipe } from '@angular/common';
import { TodoService } from './services/todoservice';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, JsonPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public readonly caption = signal<string>('Home');
  public readonly name = signal<string>('');
  public readonly id = signal<string>('el-1');
  public readonly LocalStorageService = inject(LocalStorageService);
  public readonly user = signal<any>(undefined);
  public readonly TodoService = inject(TodoService);

  constructor() {
    this.handleGetUserData();
    this.TodoService.getTodo(2).subscribe({
      next: (res: any) => {
        console.log('Todo item:', res);
      },
      error: (err: any) => {
        console.error('Error fetching todo item:', err);
      },
      complete: () => {}
    });
  }

  public handleClick(): void {
    alert(`Hello, ${this.name()}`);
  }
 
  public handleMouseEnter(e: MouseEvent): void {
    console.log('Mouse entered:', e);
  }

  public handleCaptionClick(e: string): void {
    alert(`Caption clicked: ${e}`);
  }

  public handleSetUserData(){
    this.LocalStorageService.set('USER', { name: this.name(), id:this.id() });
  }

  public handleGetUserData(){
    const userData = this.LocalStorageService.get('USER');
    this.user.set(userData);
  }

}
