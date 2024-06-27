import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent {

  protected currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'cs', 'enchant']);
    translate.setDefaultLang('en');
  }


  // Switch language
  switchLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'cs' : 'en';
    this.translate.use(this.currentLanguage);
  }

  switchToEeasteregg(): void {
    this.translate.use('enchant');
  }
}
