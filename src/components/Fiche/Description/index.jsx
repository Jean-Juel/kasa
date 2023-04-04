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
`
const FicheDescriptionTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  text-align: left;
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
  justify-content: center;
  align-items: center;
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
const FicheDescriptionProfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
const FicheDescriptionRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FicheDescriptionName = styled.p`
  white-space: pre-wrap;
  font-size: 18px;
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
`
export default function FicheDescription({fiche}) {
    console.log(fiche.rating)

    const [rating, setRating] = useState()

    const handleRating = (star) => {
        setRating(star)
    }

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
                    <FicheDescriptionStar></FicheDescriptionStar>
                </FicheDescriptionRating>
            </FicheDescriptionText>
        </FicheDescriptionContainer>
    )
}