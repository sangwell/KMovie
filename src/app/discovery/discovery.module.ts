import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DiscoveryPage} from './discovery.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {RecommendTabModule} from './recommend-tab/recommend-tab.module';
import {FollowingTabModule} from './following-tab/following-tab.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: DiscoveryPage}]),
        SuperTabsModule,
        RecommendTabModule,
        FollowingTabModule
    ],
    declarations: [
        DiscoveryPage
    ]
})
export class DiscoveryModule {
}
