import SertaoComp from "../../assets/logo-sertao-comp.svg";
import SertaoCompName from "../../assets/sertao-comp-name.svg";
import "./header.module.css"

export default function Header() {
    return (
        <header>
            <div>
                <img src={SertaoComp} alt="Logo do Sertao Comp" />
                <img src={SertaoCompName} alt="Nome do Sertao Comp" />
            </div>
            <h3>Sertaocomp Feed</h3>
        </header>
    )
}