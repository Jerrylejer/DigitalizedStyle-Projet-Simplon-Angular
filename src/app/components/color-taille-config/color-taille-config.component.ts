import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-color-taille-config',
  templateUrl: './color-taille-config.component.html',
  styleUrls: ['./color-taille-config.component.css']
})
export class ColorTailleConfigComponent {
clickMessage = '';
constructor() { }
ngOnInit() {
}
  onclick1() {
    this.clickMessage = 'click 1';
    }

}
