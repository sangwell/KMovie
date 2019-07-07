import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DateFormatPipe} from './date-format.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
        DateFormatPipe
    ],
    exports: [
        DateFormatPipe
    ]
})
export class PipesModule {

}