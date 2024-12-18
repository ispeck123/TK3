
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
    
  ],
  providers: [],
  exports:[
    FooterComponent,
    MenuComponent,
    HeaderComponent
  ],
  
})
export class SharedModule { }
