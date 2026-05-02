import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected eventCount(day: TuiDay): number {
        return day.day % 7 === 0 ? ((day.day / 7) % 3) + 1 : 0;
    }

    protected isHighlighted(day: TuiDay): boolean {
        return day.day === 1 || day.day === 15;
    }
}
