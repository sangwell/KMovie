import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ArticleAuthorPage} from './article-author';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ArticleAuthorPage}]),
    ],
    declarations: [
        ArticleAuthorPage
    ]
})
export class ArticleAuthorModule {
}