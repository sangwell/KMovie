import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DailyHistoryPage} from './daily-history.page';

const routes: Routes = [
    {
        path: '',
        component: DailyHistoryPage
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DailyHistoryRouterModule {
}
