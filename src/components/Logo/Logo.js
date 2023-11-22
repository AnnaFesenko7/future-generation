import { useTranslation } from 'react-i18next';

import logo from 'img/Icon PM.svg';

import { LogoText, StyledSpan, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <LogoWrapper>
      <img src={logo} alt="logo" />
      <LogoText>
        <div>
          <StyledSpan>{t('ChF')}</StyledSpan>
          {t('logoFirst')}
        </div>

        <span>{t('logoSecond')}</span>
      </LogoText>
    </LogoWrapper>
  );
};
