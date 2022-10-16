import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, config, useSpring } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Search from './Search';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';

function scrollEventListener(setNavBarColor) {
  return () => {
    if (window.pageYOffset < 15) {
      setNavBarColor('transparent');
    } else {
      setNavBarColor('#272727ab');
    }
  };
}

const ResponsiveNavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [navBarColor, setNavBarColor] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener(setNavBarColor));
    window.removeEventListener('scroll', scrollEventListener(setNavBarColor));
  }, []);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -100rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30rem, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  const toggleNav = () => setOpenNav((open) => !open);
  return (
    <>
      {isMobile ? (
        <NavBar style={barAnimation}>
          <FlexContainer>
            <Link href="/">
              <img src="/new_logo_dark.png" alt="FlixTime" style={{ maxHeight: '30rem', cursor: 'pointer' }} />
            </Link>
            <BurgerWrapper>
              <BurgerButton
                openNav={openNav}
                toggleNav={toggleNav}
              />
            </BurgerWrapper>
          </FlexContainer>
          <MobileMenu
            openNav={openNav}
            toggleNav={toggleNav}
          />
        </NavBar>
      )
        : (
          <NavBar style={barAnimation} navcolor={navBarColor}>
            <FlexContainer>
              <NavLinks style={linkAnimation}>
                <Link href="/">
                  <img src="/new_logo_dark.png" alt="FlixTime" style={{ maxHeight: '40rem', cursor: 'pointer' }} />
                </Link>
                <Link href="/movies"><a>Movies</a></Link>
                <Link href="/shows"><a>TV Shows</a></Link>
              </NavLinks>
              <NavLinks style={linkAnimation}>
                <Search />
              </NavLinks>
            </FlexContainer>
          </NavBar>
        )}
    </>
  );
};

export default ResponsiveNavBar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => (props.navcolor || 'transparent')};
  font-size: 16rem;
  z-index: 200;
  
  transition: background 0.3s ease-in;
  
  @media only screen and (max-width: 768px) {
  background: rgba(0, 0, 0, 0.92);
  }
`;

const FlexContainer = styled.div`
  max-width: 1400rem;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0 20rem;;
  justify-content: space-between;
  height: 65rem;
  z-index: 200
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  align-items: center;

  & a {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1rem solid transparent;
    margin: 0 15rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #adcdfd;
      border-bottom: 1rem solid #adcdfd;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  user-select: none;
`;
