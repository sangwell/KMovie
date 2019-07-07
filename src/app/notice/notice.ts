import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ImageViewerComponent} from '../components/image-viewer/image-viewer.component';

@Component({
    selector: 'app-notice',
    templateUrl: 'notice.html',
    styleUrls: ['notice.scss']
})
export class NoticePage {

    imgSource = '../../assets/imgs/ff.jpeg';
    imgTitle = 'Silhoutte';
    imgDescription = 'Photo by Mayur Gala on Unsplash';

    constructor(public modalController: ModalController) {
    }

    async viewImage(src: string, title: string = '', description: string = '') {
        const modal = await this.modalController.create({
            component: ImageViewerComponent,
            componentProps: {
                imgSource: src,
                // imgTitle: title,
                // imgDescription: description
            },
            cssClass: 'modal-fullscreen',
            keyboardClose: true,
            showBackdrop: true
        });

        return await modal.present();
    }
}
