import { useTranslation } from 'react-i18next';

import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import {
  FooterTop,
  FooterBottom,
  FooterStyled,
  StyledLink,
} from './Footer.styled';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <FooterTop>
        <StyledContainer></StyledContainer>
      </FooterTop>
      <FooterBottom>
        <StyledContainer>
          <StyledLink to="/privacy-policy" id="privacy-policy">
            {t('privacyPolicyLink')}
          </StyledLink>
          <p>© {t('copyright')}</p>
        </StyledContainer>
      </FooterBottom>
    </FooterStyled>
  );
};
