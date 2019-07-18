import axios from "axios";

export default {
    upSellWell(payload){
        return {
            type:"UP_SELLWELL",
            payload
        }

    }
}