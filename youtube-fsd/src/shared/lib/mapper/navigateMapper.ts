import type {CONNECTOR} from "../../consts/index";

export const navigateMapper = (list:string[], connector: CONNECTOR[])=>{
    return connector.filter( value => list.includes(value.title));
}