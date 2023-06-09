import styled from "styled-components";
import hero from '../../../assets/hero.jpg'
import {HeroContainer, HeroBanner, HeroBlur} from '../../Propos/Hero'

const BannerText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  z-index: 5;
  transform: translate(-50%,-30%);
  font-size: 48px;
  line-height: 68.45px;
  white-space: nowrap;
  margin: 0;
  text-align: center;
  width: 80%;
  @media (max-width: 900px) {
    font-size: calc(1vw + 2vh + 1vmin);
    white-space: normal;
    line-height: 39px;
  }
`

export default function Hero() {
    return(
        <HeroContainer>
            <HeroBanner src={hero} alt="hero banner"/>
            <HeroBlur></HeroBlur>
            <BannerText>Chez vous, partout et ailleurs</BannerText>
        </HeroContainer>
    )
}