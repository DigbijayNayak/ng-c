import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productsfilter',
  templateUrl: './productsfilter.component.html',
  styleUrls: ['./productsfilter.component.css'],
})
export class ProductsfilterComponent {
  selectedCategoryName = 'All';
  @Input() AllCount = 0;
  @Input() ElectronicsCount = 0;
  @Input() FootwearCount = 0;
  @Input() FashionCount = 0;

  @Output() EmitCategoryName: EventEmitter<string> = new EventEmitter<string>();
  OnCategoryChanged() {
    this.EmitCategoryName.emit(this.selectedCategoryName);
  }
}
