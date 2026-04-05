import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss', 
  standalone: true,
  providers: [],

})
export class HeaderComponent {
  public readonly caption = input<string>('');
  public readonly onCaptionClick = output<string>();

  public doUpdateCaption(event: Event): void {
    this.onCaptionClick.emit(this.caption());
  }

}
