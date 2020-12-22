import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "page",
        loadChildren: () =>
          import("./pages/pages.module").then(m => m.PagesModule)
      },
      { path: "", pathMatch: "full", redirectTo: "page" }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
