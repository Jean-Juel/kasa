import {cardData} from "../../../utils/api";
import styled from "styled-components";
import {Link} from "react-router-dom";

const MainContent = styled.section`
  margin-top: 32px;
  border-radius: 25px;
  background: var(--bg-grey);
`
const MainContentWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 45px;
`

const CardContainer = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  @media (max-width: 860px) {
    width: 90%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`
const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
`
const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextCard = styled.span`
  position: absolute;
  bottom: 10%;
  color: white;
  left: 10%;
  width: 50%;
  z-index: 20;
  font-weight: 500;
`
// const FilterCard = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: var(--color-red);
//   opacity: .3;
//   z-index: 2;
// `


export default function MainContentHome() {
    return (
        <MainContent>
            <MainContentWrapper>
                {cardData?.map((card, index) => {
                    return (
                        <CardContainer key={index}>
                            <CardLink to={`/fiche/${card.id}`}>
                            <ImgCard src={card.cover} alt={card.title}/>
                            <TextCard>{card.title}</TextCard>
                            {/*<FilterCard/>*/}
                            </CardLink>
                        </CardContainer>
                    )
                })}
            </MainContentWrapper>
        </MainContent>
    )
}