import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RecommendTabComponent} from './recommend-tab';
import {PopularRecommendModule} from '../../components/popular-recommend/popular-recommend.module';
import {RecommendListModule} from '../../components/recommend-list/recommend-list.module';
import {RecommendAuthorModule} from '../../components/recommend-author/recommend-author.module';
import {RecommendListLargeModule} from '../../components/recommend-list-large/recommend-list-large.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopularRecommendModule,
        RecommendListModule,
        RecommendListLargeModule,
        RecommendAuthorModule
    ],
    declarations: [RecommendTabComponent],
    exports: [RecommendTabComponent],
    entryComponents: [RecommendTabComponent],
})
export class RecommendTabModule {
}
