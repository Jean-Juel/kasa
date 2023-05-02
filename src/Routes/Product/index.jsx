import {useLocation} from "react-router-dom";
import FicheHero from "../../components/Product/Hero";
import {Main} from "../Root";
import {useEffect, useState} from "react";
import FicheDescription from "../../components/Product/Description";
import {cardData} from "../../utils/api";
import FicheCollapse from "../../components/Product/Collapse";

export default function Fiche() {
    const [params, setParams] = useState('')

    const location = useLocation().pathname
    let ficheId = location.slice(7)

    useEffect(() => {
        setParams(ficheId)
    }, [ficheId])

    for (let fiche of cardData) {
        if (ficheId === fiche.id) {
            return (
                <>
                    <Main>
                        <FicheHero params={params} fiche={fiche}/>
                        <FicheDescription fiche={fiche}/>
                        <FicheCollapse fiche={fiche}/>
                    </Main>
                </>
            )
        } else {
            console.log('err')
        }
    }

}