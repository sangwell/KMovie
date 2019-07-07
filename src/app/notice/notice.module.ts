import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NoticePage} from './notice';
import {ImageViewerModule} from '../components/image-viewer/image-viewer.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: NoticePage}]),
        ImageViewerModule
    ],
    declarations: [
        NoticePage
    ]
})
export class NoticeModule {
}