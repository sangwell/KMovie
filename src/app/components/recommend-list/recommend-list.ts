import {Component, ViewChild, Input} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Article} from '../../../shared/interface';

@Component({
    selector: 'app-recommend-list',
    templateUrl: 'recommend-list.html',
    styleUrls: ['recommend-list.scss']
})
export class RecommendListComponent {
    @Input() article: Article;

    constructor(private navCtrl: NavController) {
    }

    /*openArticle() {
        this.navCtrl.navigateForward('/article');
    }*/

}
