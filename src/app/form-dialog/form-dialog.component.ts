import { Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit, OnDestroy{
  @ViewChild('formDialog', { static: false}) formDialog: ElementRef;
  @ViewChild('content', { static: false}) content: ElementRef;

  constructor(private formBuilder: UntypedFormBuilder) {}

  public isDisabled = true;
  public disabledMap = new Map();
  
  public formControls: FormControl<any>[];
  public firstName: FormControl<string>
  public lastName: FormControl<string>
  public email: FormControl<string>
  public phoneNumber: FormControl<string>
  public location: FormControl<string>
  public description: FormControl<string>

  private subs$: Subscription[] = [];

  public ngOnInit(): void {
    this.setDisabledMap();
    this.formControls = [
      this.firstName = new FormControl('', Validators.required),
      this.lastName = new FormControl('', Validators.required),
      this.email = new FormControl('', [Validators.required, Validators.email]),
      this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern('[\(\) 0-9-]{14}')]),
      this.location = new FormControl('', Validators.required),
      this.description = new FormControl('', Validators.required)
    ]
    this.onChanges();
  }
  
  public open(): void {
    this.formDialog.nativeElement.style.display = 'block';
  }

  public close(): void {
    this.formDialog.nativeElement.style.display = 'none';
    this.setDisabledMap();
    this.isDisabled = true;
    this.resetFormValues();
  }

  public tryClose($event: any): void {
    const clickTarget = $event.target as HTMLElement;
    if (!(this.content.nativeElement as HTMLElement).contains(clickTarget)) {
      this.close();
    }
  }

  private onChanges(): void {
    this.subs$.push(this.firstName.valueChanges.subscribe(val => {
      if(val.length === 1) this.firstName.setValue(val.toUpperCase(), {emitEvent: false});
      this.isSubmitDisabled(this.firstName, 'firstName');
    }));
    this.subs$.push(this.lastName.valueChanges.subscribe(val => {
      if(val.length === 1) this.lastName.setValue(val.toUpperCase(), {emitEvent: false});
      this.isSubmitDisabled(this.lastName, 'lastName');
    }));
    this.subs$.push(this.email.valueChanges.subscribe(val => {
      this.isSubmitDisabled(this.email, 'email');
    }));
    this.subs$.push(this.phoneNumber.valueChanges.subscribe(val => {
      if (val.length > 0) {
        const input = val.replace(/\D/g,'').substring(0,10);
        const areaCode = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);

        if(input.length > 6) {
          this.phoneNumber.setValue(`(${areaCode}) ${middle}-${last}`, {emitEvent: false});
        } else if(input.length > 3) {
          this.phoneNumber.setValue(`(${areaCode}) ${middle}`, {emitEvent: false});
        } else if(input.length > 0) {
          this.phoneNumber.setValue(`(${areaCode}`, {emitEvent: false});
        } else {
          this.phoneNumber.setValue('', {emitEvent: false});
        }
        this.isSubmitDisabled(this.phoneNumber, 'phoneNumber');
      }
    }));
    this.location.valueChanges.subscribe(val => {
      this.isSubmitDisabled(this.location, 'location');
    });
    this.description.valueChanges.subscribe(val => {
      this.isSubmitDisabled(this.description, 'description');
    });
  }

  private resetFormValues(): void {
    this.formControls.forEach(control => {
      control.reset('', {emitEvent: false});
    });
  }

  private isSubmitDisabled(control: FormControl, controlName: string): void {
    if(control.invalid) {
      this.disabledMap.set(controlName, true)
    } else {
      this.disabledMap.set(controlName, false)
    }
    for (let value of this.disabledMap.values()) {
      if (value === true) {
        this.isDisabled = true;
        return
      } 
    }
    this.isDisabled = false;
    return
  }

  private setDisabledMap(): void {
    this.disabledMap.set('firstName', true)
    this.disabledMap.set('lastName', true)
    this.disabledMap.set('email', true)
    this.disabledMap.set('phoneNumber', true)
    this.disabledMap.set('location', true)
    this.disabledMap.set('description', true)
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((subscription) => {
      subscription.unsubscribe();
    })
    this.resetFormValues();
  }
}
