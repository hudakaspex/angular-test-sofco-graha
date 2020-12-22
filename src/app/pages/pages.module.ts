import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatalogComponent } from "./catalog/catalog.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { AngularFontAwesomeModule } from "angular-font-awesome/out-tsc/lib-es2015";
// import { AngularFontAwesomeModule } from "angular-font-awesome";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "shoping-list", component: ShopingListComponent },
      { path: "catalog", component: CatalogComponent },
      { path: "", pathMatch: "full", redirectTo: "home" }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    AngularFontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagesComponent,
    CatalogComponent,
    ShopingListComponent,
    HomeComponent
  ]
})
export class PagesModule {}
