import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';

import { useModal } from 'hooks/useModal';

import { LangSwitcher } from 'components/LangSwitcher/LangSwitcher';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { Logo } from 'components/Logo/Logo';
import { Modal } from 'components/Modal/Modal';
import { Navigation } from 'components/Navigation/Navigation';

import {
  LogoLink,
  StyledTel,
  StyledHeader,
  FlexBox,
  DonationBtn,
  HeaderContentWrapper,
  ModalContentWrapper,
  MenuBtn,
} from './Header.styled';

export const Header = () => {
  // const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });
  const { isModalOpen, closeModal, openModal } = useModal();
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
        <StyledContainer>
          <FlexBox>
            <HeaderContentWrapper>
              {!isDesktopDevice && (
                <MenuBtn type="button" onClick={openModal}>
                  <BiMenu size={30} />
                </MenuBtn>
              )}
              <LogoLink to="/">
                <Logo />
              </LogoLink>
            </HeaderContentWrapper>
            {isDesktopDevice && (
              <HeaderContentWrapper>
                <Navigation />
                <StyledTel href="tel:+380963597939">
                  +3 8 096 359 79 39
                </StyledTel>
                <LangSwitcher
                  onChangeLanguage={changeLanguageState}
                  currentLang={currentLang}
                />
              </HeaderContentWrapper>
            )}

            <DonationBtn to="/donation">{t('donation')}</DonationBtn>
          </FlexBox>
        </StyledContainer>
      </StyledHeader>

      <Modal active={isModalOpen} closeModal={closeModal}>
        <StyledContainer>
          <ModalContentWrapper>
            <MenuBtn $modal type="button" onClick={closeModal}>
              <BsXLg size={30} />
            </MenuBtn>
            <LogoLink to="/">
              <Logo />
            </LogoLink>

            <Navigation $modal closeModal={closeModal} />
            <StyledTel $modal href="tel:+380963597939">
              +3 8 096 359 79 39
            </StyledTel>
            <LangSwitcher
              $modal
              onChangeLanguage={changeLanguageState}
              currentLang={currentLang}
            />
            <DonationBtn to="/donation">{t('donation')}</DonationBtn>
          </ModalContentWrapper>
        </StyledContainer>
      </Modal>
    </>
  );
};
