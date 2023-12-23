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
	private panelList = inject(SidePanelService).getPanels();
	private DEFAULT_PANEL_ID = "placeholder";
	private _currentPanel = this.panelList.get(this.DEFAULT_PANEL_ID);

	get currentPanel()
	{ return this._currentPanel; }

	displayNextPanel(panelId: string)
	{ this._currentPanel = this.panelList.get(panelId); }
}
