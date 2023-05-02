import {useState} from "react";
import {
    CollapseArrowDown,
    CollapseArrowUp,
    CollapseContainerContent, CollapseContent,
    CollapseTextContainerHide,
    CollapseTextHide, CollapseTitle, CollapseTitleContainer
} from "./Product/Collapse";

export default function Collapse({title, children, width}) {
    const [active, setActive] =useState(false)
    return(
        <CollapseContainerContent style={{width: width}}>
            <CollapseContent onClick={()=> setActive(!active)}>
                <CollapseTitleContainer>
                    <CollapseTitle>{title}</CollapseTitle>
                    {active ? (<CollapseArrowDown/>) : (<CollapseArrowUp/>)}
                </CollapseTitleContainer>
            </CollapseContent>
            {active ? (
                <CollapseTextContainerHide style={{translateY: '0'}}>
                    <CollapseTextHide>
                        {children}
                    </CollapseTextHide>
                </CollapseTextContainerHide>
            ) : null}
        </CollapseContainerContent>
    )
}