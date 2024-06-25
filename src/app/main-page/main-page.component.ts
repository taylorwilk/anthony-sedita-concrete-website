import { Component, ViewChild } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild(FormDialogComponent) formDialog: FormDialogComponent;

  openDialog() {
    this.formDialog.open();
  }

  onCall() {
    window.open("tel:+1203321725");
  }
}
