import styled from "styled-components";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import FicheHero from "../../components/Fiche/Hero";
import {Main} from "../Root";
import {useEffect, useState} from "react";
import FicheDescription from "../../components/Fiche/Description";
import {cardData} from "../../utils/api";
import FicheCollapse from "../../components/Fiche/Collapse";


export default function Fiche() {
    const [params, setParams] = useState('')
    const [fiche, setFiche] = useState({})

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