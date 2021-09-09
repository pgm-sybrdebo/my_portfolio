import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import * as Routes from '../../routes';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
`;

const Logo = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  transition: ${props => props.theme.transition.normal};
  display: inline-block;

  &:hover {
    color: ${props => props.theme.colors.primaryAccentColor};
    transform: scale(1.2);
  }

  @media (min-width: ${props => props.theme.width.medium}) {
    padding-bottom: 1rem;
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

const Navigation = styled.nav`
`;

const NavigationList = styled.ul`
  list-style: none;
  position: absolute;
  left: 0;
  top:  ${({ open }) => open ? '0' : '-100%'};
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overscroll-behavior: contain;
  padding: 1.5rem;
  padding-top: 6rem;
  background-color: ${props => props.theme.colors.blackBg};
  z-index: 10;
  transition: ${props => props.theme.transition.normal};

  li {
    margin-bottom: 1.5rem;

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
        <Logo>S.</Logo>
      </NavLink>

      <NavButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </NavButton>

      <Navigation  open={open}>
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
      </Navigation>       
    </HeaderStyle>
  )
}

export default Header
