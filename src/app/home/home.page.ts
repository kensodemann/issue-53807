import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonInput, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar],
})
export class HomePage {
  getHelp() {
    const days = Math.floor(Math.random() * 365) + 40;
    const message = `We have heard your pleas for help. Help should arive in roughly ${days} days. May the force be with you in the meantime. `;
    alert(message);
  }
}
