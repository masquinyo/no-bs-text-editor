import { Component } from "@angular/core";

@Component({
  selector: "masquinyo-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"]
})
export class MasquinyoTextEditorComponent {
  public MousePosition: any = {
    left: 0,
    top: 0
  };

  public editDiv($event): void {
    this.MousePosition.left = $event.x;
    this.MousePosition.top = $event.y;
    console.log($event);
  }

  public getInput($event): void {
    console.log($event);
  }
}
