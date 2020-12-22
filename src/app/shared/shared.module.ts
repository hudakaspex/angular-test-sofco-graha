import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { CardBookComponent } from "./components/card-book/card-book.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, CardBookComponent],
  exports: [HeaderComponent, CardBookComponent]
})
export class SharedModule {}
