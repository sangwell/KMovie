import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: 'article.page.html',
    styleUrls: ['article.page.scss']
})
export class ArticlePage {

    imgSource = '';

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute) {
        this.route.params.subscribe(res => {
            console.log(res);
            this.imgSource = res.imageSrc;
        });
    }

    back() {
        this.navCtrl.back();
    }
}
