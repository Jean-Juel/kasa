import {useState} from "react";
import {
    CollapseArrowDown,
    CollapseArrowUp,
    CollapseContainerContent, CollapseContent,
    CollapseTextContainerHide,
    CollapseTextHide, CollapseTitle, CollapseTitleContainer
} from "./Product/Collapse";

export default function Collapse({title, children, width, padding}) {
    const [active, setActive] =useState(false)
    return(
        <CollapseContainerContent style={{width: width}}>
            <CollapseContent onClick={()=> setActive(!active)}>
                <CollapseTitleContainer style={{paddingBottom: padding, paddingTop: padding}}>
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