import {Pipe, PipeTransform} from '@angular/core';

declare let require: any;
const moment = require('moment');
const today = moment().format('YYYY-MM-DD');

@Pipe({
    name: 'DateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(date: string): string {
        let formatStr: string;
        const dateSource = moment(date);
        const diff = moment(today).diff(dateSource, 'days');
        if (diff === 0) {
            formatStr = `今天`;
        } else if (diff === 1) {
            formatStr = '昨天';
        } else if (1 < diff && diff <= 30) {
            formatStr = diff + `天前`;
        } else if (30 < diff && diff <= 360) {
            formatStr = Math.round(diff / 30) + `月前`;
        } else if (360 < diff) {
            formatStr = Math.round(diff / 360) + `年前`;
        }
        return formatStr;
    }
}