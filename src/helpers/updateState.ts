import { HassConfig, HassEntities, HassServices, HassUser } from "home-assistant-js-websocket";
import { store } from "../redux/store";

export function getHassTypes(value: any){
    const config: HassConfig = value.config;
    const services: HassServices = value.services;
    const entities: HassEntities = value.states;
    const user: HassUser = value.user;
    return [config, services, entities, user]
}

export function updateState(newValue:any, selectValue:any, updateValue:any){
    const state = store.getState();
    const existingValue = selectValue(state);
    if (newValue !== existingValue) {
        store.dispatch(updateValue(newValue));
    }
}