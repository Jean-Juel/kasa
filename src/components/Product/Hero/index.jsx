import styled from "styled-components";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useState} from "react";

const FicheHeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 415px;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
`
const FicheHeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;
  transition: all .5s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
`
const FicheHeroBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 25px;
`
const FicheArrowBannerLeft = styled(FaAngleLeft)`
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
  z-index: 5;
  fill: white;
  transform: translateY(-50%);
  transition: all .5s ease-in-out;
`
const FicheArrowBannerRight = styled(FaAngleRight)`
  font-size: 60px;
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  z-index: 5;
  fill: white;
  transform: translateY(-50%);
`
const HeroBlur = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  border-radius: 25px;
  opacity: 0;
  transition: opacity 200ms;
  transition-duration: 200ms;
  transition-property: forward;
`

export default function FicheHero({fiche}) {
    let [currentIndex, setCurrentIndex] = useState(0)
    let blur =  document.querySelector('.blur')

    const pictures = fiche.pictures

    function prevSlide() {
        const isFirstSLide = currentIndex === 0;
        const newIndex = isFirstSLide ? pictures.length - 1 : currentIndex - 1
        blur.classList.opacity = '1'
        setCurrentIndex(newIndex)
    }

    function nextSlide() {
        const isLqstSLide = currentIndex === pictures.length - 1;
        const newIndex = isLqstSLide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    return (
        <FicheHeroContainer>
            <FicheHeroWrapper id="slider">
                <FicheArrowBannerLeft onClick={prevSlide}/>
                <FicheHeroBanner src={fiche.pictures[currentIndex]} alt={fiche.title}/>
                <HeroBlur className={"blur"}/>
                <FicheArrowBannerRight onClick={nextSlide}/>
            </FicheHeroWrapper>
        </FicheHeroContainer>
    )

}