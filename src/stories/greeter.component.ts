import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-greeter',
    template: `<p> hello {{privateWho}} <\p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GreeterComponent implements OnChanges {
    @Input() who: String = '';
    
    privateWho = 'World!';

    ngOnChanges(changes: SimpleChanges): void {
        this.privateWho = changes["who"].currentValue;
    }
}
  