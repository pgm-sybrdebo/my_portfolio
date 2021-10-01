import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import * as Routes from '../../routes';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    margin: 0.5rem 3rem 1.5rem 3rem;
  }
`;

const Logo = styled.svg`
  transition: ${props => props.theme.transition.normal};
  

  &:hover {
    text {
      fill: ${props => props.theme.colors.primaryAccentColor};
    }
    transform: scale(1.2);
  }
`;

const NavButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 100;
  margin-left: auto;
  span {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    margin-bottom: 0.3rem;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg) translateY(0.8rem)'  : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(2rem)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(-0.8rem)' : 'rotate(0)'};
    }
  }
  @media (min-width: ${props => props.theme.width.medium}) {
    display: none;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  position: absolute;
  left: 0rem;
  top:  ${({ open }) => open ? '0' : '-100%'};
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overscroll-behavior: contain;
  padding-top: 6rem;
  padding-left: 1.5rem;
  background-color: ${props => props.theme.colors.blackBg};
  z-index: 10;
  transition: ${props => props.theme.transition.normal};

  li {
    margin: 1.5rem 0;

    a {
      position: relative;
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.fontSizes.medium};
      font-weight: ${props => props.theme.fontWeights.bold};
      transition: ${props => props.theme.transition.normal};

      &::before {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0;
        height: 3px;
        background-color: ${props => props.theme.colors.secondaryAccentColor};
        transition: all 0.5s ease;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        right: 0;
        width: 0;
        height: 3px;
        background-color: ${props => props.theme.colors.primaryAccentColor};
        transition: all 0.5s ease;
      }
      
      &:hover {
        color: ${props => props.theme.colors.primaryAccentColor};

        &::before {
          width: 100%;
        }
        
        &::after {
          width: 100%
        }
      }

      &.is-active {
        color: ${props => props.theme.colors.primaryAccentColor};

        &::before {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: ${props => props.theme.colors.primaryAccentColor};
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.width.medium}) {
    position: static;
    display: flex;
    align-items: center;
    height: auto;
    width: auto;
    padding: 0;

    li {
      margin-left: 3rem;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <HeaderStyle>
      <NavLink to={Routes.LANDING}>
        <Logo xmlns="http://www.w3.org/2000/svg" width="70" height="49"><g data-name="Group 1" fill="#fff" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><text fontSize="40"><tspan x="0" y="39">S</tspan></text><text transform="matrix(-1 0 0 1 47 39)" fontSize="24"><tspan x="0" y="0">D</tspan></text><text transform="translate(39 16)" fontSize="24"><tspan x="0" y="23">B</tspan></text></g></Logo>
      </NavLink>

      <NavButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </NavButton>

      <nav  open={open}>
        <NavigationList open={open}>
          <li>
            <NavLink to={Routes.PROJECTS} activeClassName='is-active'>My Projects</NavLink>
          </li>
          <li>
            <NavLink to={Routes.ABOUT} activeClassName='is-active'>About me</NavLink>
          </li>
          <li>
            <NavLink to={Routes.CONTACT} activeClassName='is-active'>Contact me</NavLink>
          </li>
        </NavigationList>  
      </nav>       
    </HeaderStyle>
  )
}

export default Header
