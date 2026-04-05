import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public readonly caption = signal<string>('Home');
  public readonly name = signal<string>('Ali Rahimi');
  public readonly id = signal<string>('el-1');

  public handleClick(): void {
    alert(`Hello, ${this.name}`);
  }
 
  public handleMouseEnter(e: MouseEvent): void {
    console.log('Mouse entered:', e);
  }

  public handleCaptionClick(e: string): void {
    alert(`Caption clicked: ${e}`);
  }
}
