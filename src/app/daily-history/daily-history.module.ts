import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DailyHistoryRouterModule} from './daily-history.router.module';

import {DailyHistoryPage} from './daily-history.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        DailyHistoryRouterModule
    ],
    declarations: [DailyHistoryPage]
})
export class DailyHistoryModule {
}
