import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';

import { LangSwitcher } from 'components/LangSwitcher/LangSwitcher';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';

import logoName from 'img/logo-name.svg';

import {
  LogoLink,
  StyledNav,
  StyledTel,
  StyledHeader,
  FlexBox,
  DonationBtn,
  HeaderContentWrapper,
} from './Header.styled';

export const Header = () => {
  // const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });
  const [currentLang, setCurrentLang] = useState('ua');

  const changeLanguageState = language => {
    setCurrentLang(language);
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <>
      <StyledHeader>
        <StyledContainer header>
          <FlexBox>
            <HeaderContentWrapper logo>
              {!isDesktopDevice && <BiMenu size={30} />}
              <LogoLink to="/">
                <img src={logoName} alt="logo" />
              </LogoLink>
            </HeaderContentWrapper>
            <HeaderContentWrapper>
              <StyledNav>
                <CustomLink to="/about">{t('about')}</CustomLink>
                <CustomLink to="/news">{t('news')}</CustomLink>
                <CustomLink to="/partners">{t('partners')}</CustomLink>
              </StyledNav>
              <StyledTel href="tel:+380963597939">+3 8 096 359 79 39</StyledTel>
              <LangSwitcher
                onChangeLanguage={changeLanguageState}
                currentLang={currentLang}
              />
            </HeaderContentWrapper>
            <DonationBtn to="/donation">{t('donation')}</DonationBtn>
          </FlexBox>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};
