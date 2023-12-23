import { Injectable, Type } from '@angular/core';
import { PanelBase } from './panels/panel-base/panel-base.component';
import { HelloPanel } from './panels/hello-panel/hello-panel.component';
import { PanelItem } from './panels/panel-item';

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
		{
			id: "hello-placeholder",
			component: HelloPanel,
			inputs: { modeSetting: "placeholder", selectionType: "someSelection" }
		};

		const helloContentPanel: PanelItem =
		{
			id: "hello-content",
			component: HelloPanel,
			inputs: { modeSetting: "content", selectionType: "someDifferentSelection" }
		}

		const newPanelMap = new Map<string, any>(
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

		return newPanelMap as DynamicComponentMap;
	}
}

/**
 * 	const newPanelMap = new Map<string, PanelItem>(
		[
			// ["categories", categoriesPanel],
			// ["collaboration", collaborationPanel],
			// ["editMetadata", editMetadataPanel],
			// ["editNode", editNodePanel],
			// ["miiv", miivPanel],
			["evidence", evidencePanel],
			["nodeStyle", nodeStylePanel]
		]
	);
 */