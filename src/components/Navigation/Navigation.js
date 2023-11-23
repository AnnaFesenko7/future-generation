import { useTranslation } from 'react-i18next';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { StyledNav } from './Navigation.styled';

export const Navigation = ({ $modal, closeModal }) => {
  const { t } = useTranslation();
  return (
    <StyledNav
      $modal={$modal}
      onClick={() => {
        $modal && closeModal();
      }}
    >
      <CustomLink to="/about">{t('about')}</CustomLink>
      <CustomLink to="/news">{t('news')}</CustomLink>
      <CustomLink to="/partners">{t('partners')}</CustomLink>
      <CustomLink to="/activities">{t('activities')}</CustomLink>
    </StyledNav>
  );
};