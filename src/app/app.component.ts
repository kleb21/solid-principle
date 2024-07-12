import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-accordion [icon]="'🔽'">
      <app-accordion-panel id="panel1">
        <div panel-title>Panel 1 Title</div>
        <div panel-content>Panel 1 Content</div>
      </app-accordion-panel>
      <app-accordion-panel id="panel2">
        <div panel-title>Panel 2 Title</div>
        <div panel-content>Panel 2 Content</div>
      </app-accordion-panel>
      <app-accordion-panel id="panel3">
        <div panel-title>Panel 3 Title</div>
        <div panel-content>Panel 3 Content</div>
      </app-accordion-panel>
    </app-accordion>

    <router-outlet />
  `,
  styles: [
    `
      details {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 4px;
      }

      summary {
        font-weight: bold;
        cursor: pointer;
        padding: 10px;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
      }

      .panel-content {
        padding: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = "solid-project";
}
