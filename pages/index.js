import Head from "next/head";
import { useState } from 'react'
import { Navbar, Intro, Atuacao, Equipe, Sobre, Contato, Endereco, Footer, Menu } from '../components'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import styled from "styled-components";

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

      </Head>
      <Container className='app'>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <WhatsAppIcon className='whats-icon' /> 
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

    .whats-icon {
        font-size: 60px;
        position: fixed;
        right: 30px;
        bottom: 20px;
        color: ${props => props.theme.colors.white};
        background: #25D366;
        padding: 8px;
        border-radius: 50%;
        z-index: 1;
        overflow: visible;

        @media (max-width: 600px) {
            font-size: 50px;
            right: 8px;
            bottom: 8px;
        }

    }
`;