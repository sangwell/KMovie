import {NgModule} from '@angular/core';
import {RecommendListComponent} from './recommend-list';
import {PipesModule} from '../../../shared/pipe/pipe.module';

@NgModule({
    declarations: [
        RecommendListComponent
    ],
    imports: [
        PipesModule
    ],
    providers: [
        // ArticleService
    ],
    exports: [
        RecommendListComponent
    ],
})
export class RecommendListModule {
}
