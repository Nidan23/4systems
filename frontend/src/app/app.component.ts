import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  displayType = {
    none: 'none',
    flex: 'flex'
  }

  showNavigation(nav: HTMLDivElement) {
    if(nav.style.display === this.displayType.flex)
      nav.style.display = this.displayType.none
    else
      nav.style.display = this.displayType.flex
  }
}
