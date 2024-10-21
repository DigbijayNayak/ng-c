import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LikesdemoComponent } from './likesdemo/likesdemo.component';
import { IterationdemoComponent } from './iterationdemo/iterationdemo.component';
import { TrackdemoComponent } from './trackdemo/trackdemo.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ClassdemoComponent } from './classdemo/classdemo.component';
import { StyledemoComponent } from './styledemo/styledemo.component';
import { AngularcssComponent } from './angularcss/angularcss.component';
import { KeybindingComponent } from './keybinding/keybinding.component';
import { MousedemoComponent } from './mousedemo/mousedemo.component';
import { EventsdemoComponent } from './eventsdemo/eventsdemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductsfilterComponent } from './productsfilter/productsfilter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SendvalueComponent } from './sendvalue/sendvalue.component';
import { DisplayvalueComponent } from './displayvalue/displayvalue.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentenceCasePipe } from './Sentencecase.pipe';
// import { DataLabelingComponent } from './data-labeling/data-labeling.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatabindingComponent,
    OnewayComponent,
    TwowaybindingComponent,
    IfdemoComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    LikesdemoComponent,
    IterationdemoComponent,
    TrackdemoComponent,
    ConditionsComponent,
    ClassdemoComponent,
    StyledemoComponent,
    AngularcssComponent,
    KeybindingComponent,
    MousedemoComponent,
    EventsdemoComponent,
    ParentComponent,
    ChildComponent,
    ProductsfilterComponent,
    ProductsListComponent,
    SendvalueComponent,
    DisplayvalueComponent,
    PipedemoComponent,
    SentenceCasePipe,
    // DataLabelingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
