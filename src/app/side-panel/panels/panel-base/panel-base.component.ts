import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-base',
  standalone: true,
  imports: [],
  templateUrl: './panel-base.component.html',
  styleUrl: './panel-base.component.sass'
})
export abstract class PanelBase
{
	@Input() modeSetting: string = "";
	@Input() selectionType: string = "";

	abstract getPlaceholderText(): string;

	shouldDisplayContent(): boolean
	{ return (this.getPlaceholderText() === ""); }

	shouldDisplayPlaceholer(): boolean
	{ return (!this.shouldDisplayContent()); }
}
