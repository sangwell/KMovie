import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ImageViewerComponent} from './image-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [ImageViewerComponent],
    exports: [ImageViewerComponent],
    entryComponents: [ImageViewerComponent],
})
export class ImageViewerModule {
}
