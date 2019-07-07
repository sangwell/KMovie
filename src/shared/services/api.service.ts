import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {Article, DailySign} from '../interface';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }


    /*test() {
        return this.http.get('https://b-gold-cdn.xitu.io/favicons/v2/manifest.json').map(response => response.json());
    }*/

    // 首页顶部轮播列表
    getPopularArticleList() {
        const list: Array<Article> = [
            {Id: '', Title: '我们的下一个金棕榈在哪？', Author: '巴塞电影', ImageSrc: 'http://up526.com/krmovie/jsc.jpg'},
            {Id: '', Title: '我们的下一个金棕榈在哪？', Author: '巴塞电影', ImageSrc: 'http://up526.com/krmovie/jsc.jpg'},
            {Id: '', Title: '我们的下一个金棕榈在哪？', Author: '巴塞电影', ImageSrc: 'http://up526.com/krmovie/jsc.jpg'},
            {Id: '', Title: '我们的下一个金棕榈在哪？', Author: '巴塞电影', ImageSrc: 'http://up526.com/krmovie/jsc.jpg'},
            {Id: '', Title: '我们的下一个金棕榈在哪？', Author: '巴塞电影', ImageSrc: 'http://up526.com/krmovie/jsc.jpg'}
        ];
        return of(list);
    }

    // 首页列表
    getArticleList() {
        const list: Array<Article> = [
            {
                Title: '飙升9.7，BBC拍的跨时代神作，居然等来了续集！',
                Author: '乌鸦电影',
                CreateTime: '2019-06-30',
                ImageSrc: 'http://up526.com/krmovie/bbc.jpeg',
            },
            {
                Title: '这位陷入瓶颈的导演，拍了一部失控的犯罪片',
                Author: '看电影看到死',
                CreateTime: '2019-06-30',
                ImageSrc: 'http://up526.com/krmovie/blzd.png',
            }
        ];
        return of(list);
    }

    // 历史日签列表
    getDailyHistoryList() {
        const dailyList: Array<DailySign> = [
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#cc4466'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#004466'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#44cc66'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#661166'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#00ffff'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#cc4466'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#004466'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#44cc66'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#661166'
            },
            {
                DateTime: '2019-05-04',
                Content: '如果我们想听到掌声，我们应该去马戏团',
                MovieTitle: '《逃离德黑兰》',
                BgColor: '#00ffff'
            }
        ];
        return of(dailyList);
    }

}


// https://b-gold-cdn.xitu.io/favicons/v2/manifest.json

