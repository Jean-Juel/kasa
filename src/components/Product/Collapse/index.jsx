import styled from "styled-components";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import Collapse from '../../Collapse'
export const CollapseSection = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 170px;
`
export const CollapseWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
export const CollapseContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const CollapseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-red);
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
`

export const CollapseTextContainerHide = styled.div`
  background: var(--bg-grey);
  width: 100%;
  height: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const CollapseTextHide = styled.p`
  padding: 10px 20px;
  font-size: 18px;
  transition: all .5s;
`
const CollapseItemHide = styled.li`
  padding: 10px;
  text-decoration: none;
  color: var(--color-red);
`
export const CollapseTitleContainer = styled.div`
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const CollapseTitle = styled.h2`
  color: white;
`
export const CollapseArrowDown = styled(FaAngleDown)`
  width: 30px;
  fill: white;
  cursor: pointer;
  font-size: 30px;
`
export const CollapseArrowUp = styled(FaAngleUp)`
  width: 30px;
  fill: white;
  cursor: pointer;
  font-size: 30px;
`

export default function FicheCollapse({fiche}) {
    let equipements = fiche.equipments.map((equip, index) => {
       return  <CollapseItemHide key={index}>{equip}</CollapseItemHide>
    })

    return (
        <CollapseSection>
            <CollapseWrapper>
                <Collapse title="Description" width="50">
                   {fiche.description}
                </Collapse>
                <Collapse title="Equipements" width="50">
                    {equipements}
                </Collapse>
            </CollapseWrapper>
        </CollapseSection>
    )
}