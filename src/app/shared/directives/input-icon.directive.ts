import {Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[inputIcon]',
})
export class InputIconDirective implements OnInit, OnDestroy {
  @Input() public icon: string;

  @Input() public set isInvalidValue(isError: boolean | undefined) {
    if (isError) {
      this._setMessageError()
    } else {
      this._removeMessageError()
    }
  }

  private _el: ElementRef = inject(ElementRef)
  private _renderer: Renderer2 = inject(Renderer2)
  private _inputContainerElement: HTMLDivElement | undefined;

  public constructor() {
    this.icon = '';
    this._inputContainerElement = this._renderer.createElement('div');
  }

  ngOnInit(): void {
    this._initialize()
  }

  ngOnDestroy(): void {
    this._inputContainerElement = undefined;
  }

  private _initialize(): void {
    const inputElement = this._el.nativeElement;
    const parentElement = inputElement.parentNode;

    this._renderer.addClass(this._inputContainerElement, 'field');
    this._renderer.addClass(inputElement, 'field__input');
    this._renderer.insertBefore(parentElement, this._inputContainerElement, inputElement);
    if (this.icon) {
      const iconElement = this._renderer.createElement('i');
      this._renderer.addClass(iconElement, 'field__icon');
      this._renderer.addClass(iconElement, 'pi');
      this._renderer.addClass(iconElement, this.icon);
      this._renderer.appendChild(this._inputContainerElement, iconElement);
    }
    this._renderer.appendChild(this._inputContainerElement, inputElement);
  }

  private _setMessageError(): void {
    this._renderer.addClass(this._inputContainerElement, 'error');
  }

  private _removeMessageError(): void {
    this._renderer.removeClass(this._inputContainerElement, 'error');
  }
}
