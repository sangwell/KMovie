import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../shared/services';
import {DailySign} from '../../shared/interface';

@Component({
    selector: 'app-daily-history',
    templateUrl: 'daily-history.page.html',
    styleUrls: ['daily-history.page.scss']
})
export class DailyHistoryPage {

    dailyHistory: Array<DailySign> = [];

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private apiService: ApiService) {
        this.getDailyHistory();
    }

    getDailyHistory() {
        this.apiService.getDailyHistoryList().subscribe(
            data => {
                this.dailyHistory = data;
            }
        );
    }

    back() {
        this.navCtrl.back();
    }
}
