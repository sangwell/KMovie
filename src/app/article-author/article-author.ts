import {Component, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'page-article-author',
    templateUrl: 'article-author.html',
    styleUrls: ['article-author.scss']
})
export class ArticleAuthorPage {

    @ViewChild(IonSlides) slides: any;
    currentTabIndex = 0;
    authorList = [
        {
            Name: '氪电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '乌鸦电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '电影最TOP',
            ImageSrc: '',
            IsFollowed: false,
        },
        {
            Name: '巴塞电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '库布里克的小丑',
            ImageSrc: '',
            IsFollowed: false,
        },
        {
            Name: '张大大说电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '三体星球',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '无限电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '氪电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '乌鸦电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '电影最TOP',
            ImageSrc: '',
            IsFollowed: false,
        },
        {
            Name: '巴塞电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '库布里克的小丑',
            ImageSrc: '',
            IsFollowed: false,
        },
        {
            Name: '张大大说电影',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '三体星球',
            ImageSrc: '',
            IsFollowed: true,
        },
        {
            Name: '无限电影',
            ImageSrc: '',
            IsFollowed: true,
        }
    ];

    constructor(public navCtrl: NavController) {
    }

    switchToAll() {
        this.currentTabIndex = 0;
        this.goToSlide(this.currentTabIndex);
    }

    switchToMine() {
        this.currentTabIndex = 1;
        this.goToSlide(this.currentTabIndex);
    }

    goToSlide(index: number) {
        this.slides.slideTo(index);
    }

    slideChanged() {
        this.slides.getActiveIndex().then(
            index => {
                this.currentTabIndex = index;
            }
        );
    }

}
