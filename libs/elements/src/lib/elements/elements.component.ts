import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css',
})
export class ElementsComponent {}
