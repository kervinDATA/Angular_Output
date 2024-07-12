import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOnomatopiaComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  }

  clearList(): void {
    this.onomatopoeiaList = [];
  }
}
