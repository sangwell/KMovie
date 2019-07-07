import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PopularRecommendComponent} from './popular-recommend';
import {ApiService} from '../../../shared/services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [PopularRecommendComponent],
    exports: [PopularRecommendComponent],
    providers: [ApiService],
    entryComponents: [PopularRecommendComponent],
})
export class PopularRecommendModule {
}
