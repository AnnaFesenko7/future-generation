import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Contacts } from 'components/Contacts/Contacts';

import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import {
  FooterTop,
  FooterBottom,
  FooterStyled,
  LogoLink,
  FooterTopWrapper,
  StyledP,
  NavWrapper,
  StyledLink,
} from './Footer.styled';

export const Footer = () => {
  const { t } = useTranslation();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <FooterStyled>
      <FooterTop>
        <StyledContainer>
          <FooterTopWrapper>
            <NavWrapper>
              <div>
                <LogoLink to="/">
                  <Logo />
                </LogoLink>
                {isMobileDevice && <Contacts />}
              </div>
              <Navigation $footer />
            </NavWrapper>
            {!isMobileDevice && <Contacts />}
          </FooterTopWrapper>
        </StyledContainer>
      </FooterTop>
      <FooterBottom>
        <StyledContainer>
          <StyledLink to="/privacy-policy" id="privacy-policy">
            {t('privacyPolicyLink')}
          </StyledLink>
          <StyledP>© {t('copyright')}</StyledP>
        </StyledContainer>
      </FooterBottom>
    </FooterStyled>
  );
};
