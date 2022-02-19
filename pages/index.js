import Head from "next/head";
import { useState } from 'react'
import { Navbar, Intro, Atuacao, Equipe, Sobre, Contato, Endereco, Footer, Menu } from '../components';
import styled from "styled-components";
// import GoogleMaps from "../components/GoogleMaps";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>NextJS Blog with Butter CMS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </Head>
      <Container className='app'>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="icon-bg">
          <i className="whats-icon fab fa-whatsapp"></i> 
        </div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <section className="sections">
          <Intro /> 
          <Atuacao />
          <Equipe />
          <Sobre />
          <Contato />
          <Endereco />
          <Footer />
        </section>
      </Container>
    
    </>
  );
}

const Container = styled.main`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 130px;
    @media (max-height: 500px) {
        top: 70px
    }

    .sections {
        width: 100%;
        height: 100%;
        scroll-behavior: smooth;

        > *{
            width: 100%;
            padding: 2em calc((100vw - 1200px)/2);
        }
    }
    
    .icon-bg {
      width: 75px;
      height: 75px;
      position: fixed;
      right: 30px;
      bottom: 20px;
      background: #25D366;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      @media (max-width: 600px) {
            right: 8px;
            bottom: 8px;
        }
    }

    .whats-icon {
        position: relative;
        text-align: center;
        font-size: 3.39em;
        color: ${props => props.theme.colors.white};
        z-index: 1;
        overflow: visible;
    }
`;