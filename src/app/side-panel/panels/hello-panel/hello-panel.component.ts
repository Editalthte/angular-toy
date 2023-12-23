import { Component } from '@angular/core';
import { PanelBase } from '../panel-base/panel-base.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hello-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hello-panel.component.html',
  styleUrl: './hello-panel.component.sass'
})
export class HelloPanel extends PanelBase
{
	override shouldDisplayContent(): boolean
	{ return (this.modeSetting != "placeholder"); }

	override getPlaceholderText(): string
	{ return "This is Hello Panel's placeholder text"; }
}
