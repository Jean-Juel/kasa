import propoHero from '../../../assets/propo-hero.jpg'
import styled from "styled-components";


export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 223px;
  margin-bottom: 50px;
`
export const HeroBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`
export const HeroBlur = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .2;
  border-radius: 25px;
`

export default function HeroPropos() {
    return(
        <HeroContainer>
            <HeroBanner src={propoHero} alt="propos hero banner"/>
            <HeroBlur/>
        </HeroContainer>
    )
}