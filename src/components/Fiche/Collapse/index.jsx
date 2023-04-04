import {useState} from "react";
import styled from "styled-components";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

const CollapseSection = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 40px;
`
const CollapseWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
`
const CollapseContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const CollapseContent = styled.div`
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
const CollapseListHide = styled.ul`
  font-size: 18px;
  transition: all .5s;
  list-style: none;
`
const CollapseItemHide = styled.li`
  padding: 10px;
  text-decoration: none;
  color: var(--color-red);
`
const CollapseTitleContainer = styled.div`
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const CollapseTitle = styled.h2`
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
    const [visibleDescr, setVisibleDescr] = useState(false)
    const [visibleEquip, setVisibleEquip] = useState(false)

    let equipements = fiche.equipments.map((equip, index) => {
       return  <CollapseItemHide key={index}>{equip}</CollapseItemHide>
    })

    return (
        <CollapseSection>
            <CollapseWrapper>

                <CollapseContainerContent>
                    <CollapseContent onClick={()=> setVisibleDescr(!visibleDescr)}>
                        <CollapseTitleContainer>
                            <CollapseTitle>Description</CollapseTitle>
                            {visibleDescr ? (<CollapseArrowDown/>) : (<CollapseArrowUp/>)}
                        </CollapseTitleContainer>
                    </CollapseContent>
                        {visibleDescr ? (
                            <CollapseTextContainerHide style={{translateY: '0'}}>
                                <CollapseTextHide>
                                    {fiche.description}
                                </CollapseTextHide>
                            </CollapseTextContainerHide>
                        ) : null}
                </CollapseContainerContent>


                <CollapseContainerContent>
                    <CollapseContent  onClick={()=> setVisibleEquip(!visibleEquip)} >
                        <CollapseTitleContainer>
                            <CollapseTitle>Equipement</CollapseTitle>
                            {visibleEquip ? (<CollapseArrowDown/>) : (<CollapseArrowUp/>)}
                        </CollapseTitleContainer>
                    </CollapseContent>
                    {visibleEquip ? (
                        <CollapseTextContainerHide style={{translateY: '0'}}>
                            <CollapseListHide>
                                {equipements}
                            </CollapseListHide>
                        </CollapseTextContainerHide>
                    ) : null}
                </CollapseContainerContent>

            </CollapseWrapper>
        </CollapseSection>
    )
}