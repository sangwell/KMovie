import {Component, ViewChild, Input} from '@angular/core';
// import {Article} from '../../shared/interface';

@Component({
    selector: 'app-recommend-author',
    templateUrl: 'recommend-author.html',
    styleUrls: ['recommend-author.scss']
})
export class RecommendAuthorComponent {
    authorList = [
        {
            name: '巴塞电影',
            imageSrc: 'http://up526.com/krmovie/bsdy.jpeg',
        },
        {
            name: '乌鸦电影',
            imageSrc: 'http://up526.com/krmovie/wydy.png',
        },
        {
            name: '电影头条',
            imageSrc: 'http://up526.com/krmovie/dytt.png',
        },
        {
            name: '娱鲤',
            imageSrc: 'http://up526.com/krmovie/yl.jpg',
        }
    ];
}
