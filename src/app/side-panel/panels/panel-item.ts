import { Type } from "@angular/core";
import { PanelBase } from "./panel-base/panel-base.component";

export class PanelItemInputs
{
	modeSetting: string;
	selectionType: string;

	constructor(INIT_MODE_SETTING: string, INIT_SELECTION_TYPE: string)
	{
		this.modeSetting = INIT_MODE_SETTING;
		this.selectionType = INIT_SELECTION_TYPE;
	}
}

export class PanelItem
{
	id: string;
	component: Type<PanelBase>;
	inputs: PanelItemInputs;

	constructor(INIT_ID: string, INIT_COMPONENT: Type<PanelBase>, INIT_INPUTS: PanelItemInputs)
	{
		this.id = INIT_ID;
		this.component = INIT_COMPONENT;
		this.inputs = INIT_INPUTS;
	}
}
