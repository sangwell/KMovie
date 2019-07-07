import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleRouterModule } from './article.router.module';

import { ArticlePage } from './article.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ArticleRouterModule
    ],
    declarations: [ArticlePage]
})
export class ArticleModule {}
