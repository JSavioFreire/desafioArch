import { Bt, BtLight,BtDark } from "./styleDark"
import { useContext } from "react"
import { ApiContext } from "../api/api";

export default function DarkMode(){

    const {dark, setDark} = useContext(ApiContext);

    const turnMode = ()=>{
        setDark(true)
    }

    return(
        <Bt>
            <BtLight onClick={turnMode}>
                Light
            </BtLight>
            <BtDark onClick={turnMode}>
                Dark
            </BtDark>
        </Bt>
    )
}