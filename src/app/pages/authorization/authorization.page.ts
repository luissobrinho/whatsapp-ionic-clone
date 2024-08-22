import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {MaskitoDirective} from "@maskito/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonText,
    IonList,
    IonItem,
    IonSelect,
    IonInput,
    IonButtons,
    IonButton,
    ReactiveFormsModule,
    IonLabel,
    MaskitoDirective,
    IonActionSheet
  ]
})
export class AuthorizationPage {
  number = new FormControl('', [Validators.required])

  counties = signal([
    {
      text: 'United States',
      data: {
        code: '+1',
        country: 'United States',
        mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      },
    },
    {
      text: 'Brazil',
      data: {
        code: '+55',
        country: 'Brazil',
        mask: ['(', /\d/, /\d/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      },
    },
  ]);

  currentCountry = signal<any>(this.counties()[0].data);
  phoneMask = computed<MaskitoOptions>(() => ({
    mask: this.currentCountry().mask,
  }));

  constructor(private readonly router: Router) {
  }

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  async done() {
    await this.router.navigateByUrl('chats')
  }

  selectCountries(event: any) {
    this.currentCountry.set(event.detail.data);
    this.number.reset();
  }

}

