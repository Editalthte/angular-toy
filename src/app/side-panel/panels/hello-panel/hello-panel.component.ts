import { Component } from '@angular/core';
import { PanelBase } from '../panel-base/panel-base.component';

@Component({
  selector: 'app-hello-panel',
  standalone: true,
  imports: [],
  templateUrl: './hello-panel.component.html',
  styleUrl: './hello-panel.component.sass'
})
export class HelloPanel extends PanelBase
{
	override getPlaceholderText(): string
	{
		return "This is Hello Panel's placeholder text"
	}
}
