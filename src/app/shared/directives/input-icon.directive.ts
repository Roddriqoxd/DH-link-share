import {Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[inputIcon]',
})
export class InputIconDirective implements OnInit, OnDestroy {
  private _el: ElementRef = inject(ElementRef)
  private _renderer: Renderer2 = inject(Renderer2)

  @Input() public icon;

  @Input() public set isInvalidValue(isError: boolean) {
    if (isError) {
      this._setMessageError()
    } else {
      this._removeMessageError()
    }
  }

  private _inputContainerElement: HTMLDivElement | undefined;
  private _messageErrorElement: HTMLSpanElement | undefined;

  public constructor() {
    this.icon = '';
    this._inputContainerElement = this._renderer.createElement('div');
  }

  ngOnInit(): void {
    this._initialize()
  }

  ngOnDestroy(): void {
    this._inputContainerElement = undefined;
    this._messageErrorElement = undefined;
  }

  private _initialize(): void {
    const inputElement = this._el.nativeElement;
    const iconElement = this._renderer.createElement('mat-icon');
    const iconName = this._renderer.createText(this.icon);
    const parentElement = inputElement.parentNode;

    this._renderer.addClass(this._inputContainerElement, 'field');
    this._renderer.addClass(iconElement, 'field__icon');
    this._renderer.addClass(iconElement, 'mat-icon');
    this._renderer.addClass(iconElement, 'notranslate');
    this._renderer.addClass(iconElement, 'material-icons');
    this._renderer.addClass(iconElement, 'mat-icon-no-color');
    this._renderer.appendChild(iconElement, iconName);
    this._renderer.addClass(inputElement, 'field__input');
    this._renderer.insertBefore(parentElement, this._inputContainerElement, inputElement);
    this._renderer.appendChild(this._inputContainerElement, iconElement);
    this._renderer.appendChild(this._inputContainerElement, inputElement);
  }

  private _setMessageError(): void {
    const errorMessage = this._renderer.createText('Please check again');

    this._renderer.addClass(this._inputContainerElement, 'error');
    this._messageErrorElement = this._renderer.createElement('span');
    this._renderer.addClass(this._messageErrorElement, 'error__message');
    this._renderer.appendChild(this._messageErrorElement, errorMessage);
    this._renderer.appendChild(this._inputContainerElement, this._messageErrorElement);
  }

  private _removeMessageError(): void {
    this._renderer.removeClass(this._inputContainerElement, 'error');
    this._renderer.removeChild(this._inputContainerElement, this._messageErrorElement);
  }
}
