import {Component, ViewChild, Input} from '@angular/core';
import {Article} from '../../../shared/interface';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../../shared/services';

@Component({
    selector: 'app-popular-recommend',
    templateUrl: 'popular-recommend.html',
    styleUrls: ['popular-recommend.scss']
})
export class PopularRecommendComponent {
    // @Input() article: Article;
    list: Array<Article> = [];

    constructor(private navCtrl: NavController,
                private apiService: ApiService) {
        this.apiService.getPopularArticleList().subscribe(
            data => {
                this.list = data;
            }
        );
    }

    openArticle(imageSrc) {
        this.navCtrl.navigateForward(['/article', imageSrc]);
    }

}
