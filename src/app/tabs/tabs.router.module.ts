import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'discovery',
                children: [
                    {
                        path: '',
                        loadChildren: '../discovery/discovery.module#DiscoveryModule'
                    }
                ]
            },
            {
                path: 'author',
                children: [
                    {
                        path: '',
                        loadChildren: '../article-author/article-author.module#ArticleAuthorModule'
                    }
                ]
            },
            {
                path: 'notice',
                children: [
                    {
                        path: '',
                        loadChildren: '../notice/notice.module#NoticeModule'
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        loadChildren: '../user/user.module#UserModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/discovery',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
