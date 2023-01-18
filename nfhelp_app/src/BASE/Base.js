import {Base_Styled} from "./Styles_Base";
import Nf from "../NF/RECEPCAO/RecepcaoNf";
import Navegacao from "../NF/BARRA_NAVEGACAO/Nav"

const Base = () => {
    return(
        <Base_Styled>
        <Navegacao />
        <Nf />

        </Base_Styled>

    )

}

export default Base;