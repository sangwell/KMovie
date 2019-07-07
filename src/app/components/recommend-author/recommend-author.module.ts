import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RecommendAuthorComponent} from './recommend-author';
// import {PipesModule} from '../../../shared/pipe/pipe.module';

@NgModule({
    declarations: [
        RecommendAuthorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // PipesModule
    ],
    providers: [
        // ArticleService
    ],
    exports: [
        RecommendAuthorComponent
    ],
})
export class RecommendAuthorModule {
}
