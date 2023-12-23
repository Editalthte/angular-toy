import { Component, inject } from '@angular/core';

import { SidePanelService } from './side-panel.service';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.sass'
})
export class SidePanel
{
	private panelList = Array.from(inject(SidePanelService).getPanels().values());
	private currentPanelIndex = 0;

	get currentPanel()
	{ return this.panelList[this.currentPanelIndex]; }

	displayNextPanel()
	{
		this.currentPanelIndex++;

		if (this.currentPanelIndex >= this.panelList.length)
		{ this.currentPanelIndex = 0; }
	}
}
