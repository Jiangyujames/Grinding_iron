import initSell from "../state/sellWell"

export default function (state=initSell,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    console.log(1111,state);
    if(type === "UP_SELLWELL"){
        console.log(22222,payload.sellWell);
        state = payload.sellWell;
        console.log(333333,state);
        console.log(444444,payload.sellWell)
    }

    return state;
}