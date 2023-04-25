import styled from "styled-components";
import {FaStar,FaRegStar} from 'react-icons/fa'
import {useState} from "react";

const FicheDescriptionContainer = styled.section`
  font-size: 36px;
  margin: 22px 0 40px;
  padding: 10px;
`
  const FicheDescriptionText = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
    @media (max-width: 800px) {
      flex-direction: column;
    }
`
const FicheDescriptionTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  text-align: left;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
  }
`
const FicheTitle = styled.h1`
  font-size: 36px;
  margin: 0 ;
`
const FichePlace = styled.p`
  font-size: 18px;
`

const FicheDescriptionContainerTag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`
const FicheDescriptionTag = styled.div`
  background: var(--color-red);
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  min-width: 115px;
  height: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FicheDescriptionRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row-reverse;
    width: 100%;
    align-items: flex-start;
    gap: 12px;
  }
`
const FicheDescriptionProfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 800px) {
    gap: 10px;
    width: 50%;
    justify-content: flex-end;
  }
`
const FicheDescriptionName = styled.p`
  white-space: pre-wrap;
  font-size: 18px;
    width: 33%;
  @media (max-width: 400px) {
    margin-right: -15px;
  }
`
const FicheDescriptionPictureContainer = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  overflow: hidden;
`
const FicheDescriptionPicture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const FicheDescriptionStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  gap: 10px;
  @media (max-width: 800px) {
    width: 50%;
    justify-content: flex-start;
  }
`

const FicheStarEmpty = styled(FaRegStar)`
  overflow: hidden;
  position: relative;
  z-index: 10;
  width: 35px;
  @media (max-width: 800px) {
    width: 20px;
  }
`
const FicheStarFull = styled(FaStar)`
  overflow: hidden;
  position: relative;
  z-index: 10;
  width: 35px;
  @media (max-width: 800px) {
    width: 20px;
  }
`

const FicheDescriptionStarBackground = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  //background: var(--color-red);
  overflow: hidden;
  z-index: -10;
  background: transparent;
`
export default function FicheDescription({fiche}) {
    let rating = fiche.rating
    const starTotal = 5
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = parseInt(`${(Math.round(starPercentage / 10) * 10)}%`);

    let starArray = [...Array(5)].map((star, index) => {
        index += 1
        return (
            <div key={index}>
                {index <= rating ? (<FicheStarFull/>) : (<FicheStarEmpty/>)}
            </div>
        );
    })

    const ficheTag = fiche.tags.map((tag, i )=> {
        return <FicheDescriptionTag key={i}>{tag}</FicheDescriptionTag>
    })

    return(
        <FicheDescriptionContainer>
            <FicheDescriptionText>
                <FicheDescriptionTitle>
                    <FicheTitle>{fiche.title}</FicheTitle>
                    <FichePlace>{fiche.location}</FichePlace>
                    <FicheDescriptionContainerTag>
                        {ficheTag}
                    </FicheDescriptionContainerTag>
                </FicheDescriptionTitle>
                <FicheDescriptionRating>
                    <FicheDescriptionProfil>
                    <FicheDescriptionName>{fiche.host.name}</FicheDescriptionName>
                        <FicheDescriptionPictureContainer>
                            <FicheDescriptionPicture src={fiche.host.picture} alt={fiche.host.name}/>
                        </FicheDescriptionPictureContainer>
                    </FicheDescriptionProfil>
                    <FicheDescriptionStar>
                        {starArray}
                        <FicheDescriptionStarBackground style={{width: `${starPercentageRounded}%`}}/>
                    </FicheDescriptionStar>
                </FicheDescriptionRating>
            </FicheDescriptionText>
        </FicheDescriptionContainer>
    )
}