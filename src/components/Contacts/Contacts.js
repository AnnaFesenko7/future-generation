import {
  BiLogoInstagramAlt,
  BiLogoTelegram,
  BiLogoFacebookCircle,
} from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import {
  StyledDiv,
  SocialLinks,
  StyledLi,
  ContactsWrapper,
  StyledLink,
} from './Contacts.styled';

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <StyledDiv>
      <SocialLinks>
        <StyledLi>
          <BiLogoInstagramAlt />
          <span>instagram</span>
        </StyledLi>
        <StyledLi>
          <BiLogoTelegram />
          <span>{'Максим Кравчук 0992011130'}</span>
        </StyledLi>
        <StyledLi>
          <BiLogoFacebookCircle />
        </StyledLi>
      </SocialLinks>

      <ContactsWrapper>
        <span>{t('contacts')}</span>
        <span>{t('director')}</span>

        <StyledLink href="mailto:m.zpfuture@gmail.com">
          {'zpfuture@gmail.com'}
        </StyledLink>
        <StyledLink href="tel:+380967776413">+3 8 096 777 64 13</StyledLink>
      </ContactsWrapper>
    </StyledDiv>
  );
};
