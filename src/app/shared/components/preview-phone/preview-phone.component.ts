import {Component, OnInit} from '@angular/core';
import {DropdownOption} from '../../../core/interfaces/dropdown-option.interface';

@Component({
  selector: 'app-preview-phone',
  imports: [],
  templateUrl: './preview-phone.component.html',
  styleUrl: './preview-phone.component.scss'
})
export class PreviewPhoneComponent implements OnInit {

  public linksOption: DropdownOption[] = [
    {iconKey: 'pi-github', label: 'GitHub', color: 'black'},
    {iconKey: 'pi-youtube', label: 'Youtube', color: 'red'},
    {iconKey: 'pi-linkedin', label: 'Linkedin', color: 'blue'},
  ];

  private _LINK_DEFAULT: DropdownOption = {
    color: 'var(--grey-border-color)',
    label: '',
    iconKey: '',
  }

  constructor() {
    this.linksOption.push(this._LINK_DEFAULT)
    this.linksOption.push(this._LINK_DEFAULT)
  }

  ngOnInit() {
    // this.updateLinksOption()
  }

  private updateLinksOption(): void {
    if (this.linksOption.length < 5) {
      const linksNumber = 5 - this.linksOption.length;
      for (let i = 0; i < linksNumber; i++) {
        this.linksOption.push(this._LINK_DEFAULT)
      }
    }
  }
}
