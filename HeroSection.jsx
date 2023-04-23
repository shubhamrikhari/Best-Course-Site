import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
const Wrapper = styled.div`

   padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: ${({ theme }) => theme.colors.heading};
    font-weight : 500;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
const HeroSection = (props) => {
  return (
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <p className='hero-top-data'>This is me</p>
                <h1 className='hero-heading'>{props.name}</h1>
                <p className='hero-para'>Hey, This is Shubham. I am a Computer Science Student currently pursuing Btech from Lovely Professional University. I am good in DSA and Web Development and you can hire me for the same.</p>
                <Button className="btn hireme-btn">
                  <NavLink to="/contact">Hire Me</NavLink>
                </Button>
            </div>
            <div className='section-hero-image'>
              <picture>
                <img src={props.image} alt="logo1" className='hero-img'/>
              </picture>
            </div>
        </div>
    </Wrapper>
  )
}

export default HeroSection;
