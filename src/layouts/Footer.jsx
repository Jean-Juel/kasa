import styled from "styled-components";
import whiteLogo from '../assets/logo-white.svg'

const FooterContainer = styled.footer`
  background: #000;
  height: 209px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 0 auto;
`
const FooterLogo = styled.img`
  width: 100px;
`
const FooterText = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
`
export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo src={whiteLogo}/>
                <FooterText>© 2020 Kasa. All rights reserved</FooterText>
            </FooterContent>
        </FooterContainer>
    )
}