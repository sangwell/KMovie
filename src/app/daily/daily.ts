import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-daily',
    templateUrl: 'daily.html',
    styleUrls: ['daily.scss']
})
export class DailyPage {
    todayBackgroundColor = '#4bcc8b';

    constructor(public navCtrl: NavController) {

    }

    close() {
        this.navCtrl.navigateRoot('/home/tabs/discovery');
    }

}
