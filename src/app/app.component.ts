import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {PlacesService} from "./core/services/places.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wefox';
  currentLang = 'en';

  constructor(private translate: TranslateService, placeService: PlacesService) {
    translate.setDefaultLang(this.currentLang);
    placeService.getAll();
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }
}
