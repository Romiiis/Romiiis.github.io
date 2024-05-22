import { Component } from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {
  constructor(protected themeService: ThemeService) {}

}
