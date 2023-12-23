import { Type } from "@angular/core";

export interface PanelItemInputs
{
	modeSetting: string;
	selectionType: string;
}

export interface PanelItem
{
	id: string;
	component: Type<any>;
	inputs: PanelItemInputs;
}
