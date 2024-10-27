import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const StyledFooter = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #4defa3;
  margin: 5rem auto;

  @media only screen and (${devices.tablet}) {
    margin: 1rem auto 10rem auto;
    font-size: 1.2rem;
  }
  @media only screen and (${devices.iphone14}) {
    font-size: 1.2rem;
  }
  @media only screen and (${devices.mobileG}) {
    font-size: 1.2rem;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 1.2rem;
  }
  @media only screen and (${devices.mobileP}) {
    font-size: 1.2rem;
  }
`;

const Footer = props => {
  return <>
    <StyledFooter className='footer'>
        copyrights Sandro seivane 2024
    </StyledFooter>
  </>;
}

Footer.propTypes = {}

export default Footer