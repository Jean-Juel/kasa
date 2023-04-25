import {useState} from "react";
import {CollapseArrowDown, CollapseArrowUp, CollapseTextContainerHide, CollapseTextHide} from "../../Fiche/Collapse";
import styled from "styled-components";

const AccordionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 1100px) {
    width: 80%;
  }
`
const AccordionTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: var(--color-red);
  border-radius: 5px;
`
const AccordionTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`

export default function ProposCollapse({title, text}) {
    const [active, setActive] = useState(false)
        return (
            <AccordionItem onClick={() => setActive(!active)}>
                <AccordionTitleContent>
                    <AccordionTitle>{title}</AccordionTitle>
                    {active ? (<CollapseArrowUp/>) : (<CollapseArrowDown/>)}
                </AccordionTitleContent>
                {active && <CollapseTextContainerHide>
                    <CollapseTextHide>{text}</CollapseTextHide>
                </CollapseTextContainerHide>}
            </AccordionItem>
        )

}