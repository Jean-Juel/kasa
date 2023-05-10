import Header from "../../layouts/Header"
import styled from "styled-components";
import {Link} from "react-router-dom";

const ErrorContainer = styled.main`
  height: 80vh;
  width: 100%;
  margin: 0 auto;
`
const ErrorWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ErrorTitle = styled.h2`
  font-size: calc(4vw + 4vh + 2vmin);
  margin: 30px 0;
  padding: 0 20px;
`
const ErrorText = styled.p`
  font-size: 36px;
  padding: 0 20px;
  text-align: center;
`
const ErrorLink = styled(Link)`
  font-size: 18px;
  padding: 0 20px;
  text-decoration: underline var(--color-red);
`
export default function Error() {
    return (
        <>
            {/*<Header/>*/}
            <ErrorContainer>
                <ErrorWrapper>
                    <ErrorTitle>404</ErrorTitle>
                    <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
                    <ErrorLink to="/">Revenir à la page d'accueil</ErrorLink>
                </ErrorWrapper>
            </ErrorContainer>
        </>
    )
}