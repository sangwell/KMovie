import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {SuperTabs} from '@ionic-super-tabs/angular';
import {NavController} from '@ionic/angular';
import {RecommendTabComponent} from './recommend-tab/recommend-tab';
import {FollowingTabComponent} from './following-tab/following-tab';

const enum SlideIndex {
    RecommendTab,
    FollowingTab
}

@Component({
    selector: 'app-discovery',
    templateUrl: 'discovery.page.html',
    styleUrls: ['discovery.page.scss']
})
export class DiscoveryPage implements AfterViewInit {
    @ViewChild(SuperTabs) superTabs: any;
    currentSlideIndex = SlideIndex.RecommendTab;
    recommendTab = RecommendTabComponent;
    followingTab = FollowingTabComponent;

    constructor(private navCtrl: NavController) {
    }

    ngAfterViewInit() {
        /*console.log('Super tabs is ', this.superTabs);
        this.superTabs.selectTab(1);*/
    }

    goToRecommendTab() {
        this.currentSlideIndex = SlideIndex.RecommendTab;
        this.slideTo(SlideIndex.RecommendTab);
    }

    goToFollowingTab() {
        this.currentSlideIndex = SlideIndex.FollowingTab;
        this.slideTo(SlideIndex.FollowingTab);
    }

    onTabChange(slider) {
        this.currentSlideIndex = slider.detail.index;
    }

    slideTo(index) {
        this.superTabs.selectTab(index);
    }

    goToDailyHistoryPage() {
        this.navCtrl.navigateForward('/daily-history');
    }
}
