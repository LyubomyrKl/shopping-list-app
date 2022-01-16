import { ICaloriesDay } from "./ICaloriesData";

export interface ICaloriesInitialState {
    days: Array<ICaloriesDay>,
    activeDay: number,
    activeModal: boolean
}

