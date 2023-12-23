import { Component, inject } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';

import { SidePanelService } from './side-panel.service';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe, NgIf],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.sass'
})
export class SidePanel
{
	// private panelList = Array.from(inject(SidePanelService).getPanels().values());
	private panelList = inject(SidePanelService).getPanels();
	private DEFAULT_PANEL_ID = "placeholder";
	private _currentPanel = this.panelList.get(this.DEFAULT_PANEL_ID);
	private currentPanelIndex = 0;

	get currentPanel()
	{
		// return this.panelList[this.currentPanelIndex];
		return this._currentPanel;
	}

	displayNextPanel(panelId: string)
	{
		this._currentPanel = this.panelList.get(panelId);
		// this.currentPanelIndex++;

		// if (this.currentPanelIndex >= this.panelList.length)
		// { this.currentPanelIndex = 0; }
	}
}
