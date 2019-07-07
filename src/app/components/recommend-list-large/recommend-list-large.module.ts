import {NgModule} from '@angular/core';
import {RecommendListLargeComponent} from './recommend-list-large';
import {PipesModule} from '../../../shared/pipe/pipe.module';

@NgModule({
    declarations: [
        RecommendListLargeComponent
    ],
    imports: [
        PipesModule
    ],
    providers: [
        // ArticleService
    ],
    exports: [
        RecommendListLargeComponent
    ],
})
export class RecommendListLargeModule {
}
