import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ThemeSwitchComponent} from "../theme-switch/theme-switch.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ThemeSwitchComponent
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
