import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FollowingTabComponent} from './following-tab';
import {RecommendListModule} from '../../components/recommend-list/recommend-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecommendListModule
    ],
    declarations: [FollowingTabComponent],
    exports: [FollowingTabComponent],
    entryComponents: [FollowingTabComponent],
})
export class FollowingTabModule {
}
