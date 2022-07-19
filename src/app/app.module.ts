import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MasquinyoTextEditorModule } from "./components/text-editor/text-editor.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MasquinyoTextEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
