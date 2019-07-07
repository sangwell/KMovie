import {Component, ViewChild, Input} from '@angular/core';
import {Article} from '../../../shared/interface';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-recommend-list-large',
    templateUrl: 'recommend-list-large.html',
    styleUrls: ['recommend-list-large.scss']
})
export class RecommendListLargeComponent {
    @Input() article: Article;

    constructor(private navCtrl: NavController) {
    }

}
