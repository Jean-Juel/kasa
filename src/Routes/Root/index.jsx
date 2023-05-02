import Hero from '../../components/Home/Hero'
// import Header from '../src/layouts/Header'
import styled from "styled-components";
import MainContentHome from "../../components/Home/Main";

export const Main = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  @media (max-width: 1260px) {
    padding: 0 20px;
  }
`
export default function Home() {
    return (
        <Main>
            <Hero/>
            <MainContentHome/>
        </Main>
    )
}