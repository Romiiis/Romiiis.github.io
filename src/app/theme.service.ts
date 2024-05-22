import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {theme} from "../themes";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme = false;
  constructor() { }
  private activeThemeSubject = new BehaviorSubject<string | undefined>(
    undefined
  );
  activeTheme$ = this.activeThemeSubject.asObservable();

  get activeTheme(): string | undefined {
    return this.activeThemeSubject.getValue();
  }

  set(themeName: string): void {
    if (
      this.activeTheme === themeName ||
      !this.themeNames.includes(themeName)
    ) {
      return;
    }

    this.activeThemeSubject.next(themeName);
    document.documentElement.classList.remove(...Object.values(theme));
    document.documentElement.classList.add(theme[themeName]);
  }

  toggle(): void {
    this.set(this.isDarkTheme ? 'light' : 'dark');
    this.isDarkTheme = !this.isDarkTheme;

  }

  get themeNames(): string[] {
    return Object.keys(theme);
  }

}
