import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MasquinyoTextEditorComponent } from "./text-editor.component";
@NgModule({
  declarations: [MasquinyoTextEditorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MasquinyoTextEditorComponent],
  providers: []
})
export class MasquinyoTextEditorModule {}
