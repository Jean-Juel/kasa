import styled from "styled-components";
import Collapse from "../../Collapse";

const AccordionText = [
    {
        title: 'Fiabilité',
        text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        title: 'Respect',
        text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        title: 'Service',
        text: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    },
    {
        title: 'Sécurité',
        text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    },
]

const AccordionMain = styled.main`
  max-width: 1023px;
  width: 100%;
  margin: 0 auto 271px;
  @media (max-width: 800px) {
    margin: 0 auto 100px;
  }
`
const AccordionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin: 20px 0 50px;
`

export default function Accordion() {
    return (
        <AccordionMain>
            <AccordionContainer>
                {AccordionText.map(({title, text}) => {
                    return (
                        <Collapse title={title} width="100" padding="0">
                            {text}
                        </Collapse>
                    )
                })}
            </AccordionContainer>
        </AccordionMain>

    )
}