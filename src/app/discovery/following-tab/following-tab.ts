import {Component} from '@angular/core';
import {ApiService} from '../../../shared/services';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-following-tab',
    templateUrl: 'following-tab.html',
    styleUrls: ['following-tab.scss']
})
export class FollowingTabComponent {
    articleList = [];

    constructor(public navCtrl: NavController,
                private apiService: ApiService) {
        this.getArticleList();
    }

    getArticleList() {
        this.apiService.getArticleList().subscribe(
            data => {
                this.articleList = data;
            }
        );
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.apiService.getArticleList().subscribe(
                data => {
                    this.articleList.push(...data);
                    event.target.complete();
                }
            );
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            /*if (data.length == 1000) {
                event.target.disabled = true;
            }*/
        }, 500);
    }
}
