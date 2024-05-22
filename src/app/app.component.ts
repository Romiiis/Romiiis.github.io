import {Component, Inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {ThemeService} from "./theme.service";
import {DOCUMENT, NgForOf} from "@angular/common";
import {theme} from "../themes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'MyWeb';
  constructor(protected themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    this.themeService.set('light')
  }

  protected readonly theme = theme;

  switchLanguage(language: string) {
    this.document.location.href = `/${language}/`;
  }
}
