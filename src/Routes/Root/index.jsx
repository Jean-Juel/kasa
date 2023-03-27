import Hero from '../../components/Home/Hero'
// import Header from '../src/layouts/Header'
import styled from "styled-components";
import {useFetch} from "../../utils/Hooks";
import {cardData} from "../../utils/api";

export const Main = styled.main`
  max-width: 1240px;
  margin: 0 auto;
`
export const MainContent = styled.section`
  margin-top: 32px;
  border-radius: 25px;
  background: var(--bg-grey);
`
export const MainContentWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 45px;
`

export const CardContainer = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`
export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export default function Home() {
    const {
        data,
        isLoading,
        error
    } = useFetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')

    console.log(cardData)
    return (
        <Main>
            <Hero/>
            <MainContent>
                <MainContentWrapper>
                    {cardData?.map((card, index) => {
                        return (
                            <CardContainer key={`${index}`}>
                                <ImgCard src={card.pictures[0]} alt={card.title}/>
                            </CardContainer>
                        )
                    })}
                </MainContentWrapper>
            </MainContent>
        </Main>
    )
}