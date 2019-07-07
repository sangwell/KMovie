import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../../shared/services';

@Component({
    selector: 'app-recommend-tab',
    templateUrl: 'recommend-tab.html',
    styleUrls: ['recommend-tab.scss']
})
export class RecommendTabComponent {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    articleList = [];

    constructor(private navCtrl: NavController,
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

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.apiService.getArticleList().subscribe(
                data => {
                    this.articleList.push(...data);
                    infiniteScroll.complete();
                }
            );
        }, 500);
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

    openArticle(imageSrc) {
        this.navCtrl.navigateForward(['/article', imageSrc]);
    }
}
