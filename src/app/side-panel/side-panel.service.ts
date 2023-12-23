import { Injectable, Type } from '@angular/core';
import { PanelBase } from './panels/panel-base/panel-base.component';
import { HelloPanel } from './panels/hello-panel/hello-panel.component';
import { PanelItem, PanelItemInputs } from './panels/panel-item';

type DynamicComponentInputs = Record<string, unknown>;
type DynamicComponentMap = Map<string, { component: Type<any>, inputs: DynamicComponentInputs }>;

@Injectable({
  providedIn: 'root'
})
export class SidePanelService
{
	constructor() { }

	getPanels()
	{
		const helloPlaceholderPanel: PanelItem =
			new PanelItem("hello-placeholder", HelloPanel, new PanelItemInputs("placeholder", "someSelection"));

		const helloContentPanel: PanelItem =
			new PanelItem("hello-content", HelloPanel, new PanelItemInputs("content", "someDifferentSelection"));


		const newPanelMap = new Map<string, PanelItem>(
			[
				[
					helloPlaceholderPanel.id,
					helloPlaceholderPanel
				],

				[
					helloContentPanel.id,
					helloContentPanel
				]
			]
		)

		return newPanelMap as unknown as DynamicComponentMap;
	}
}