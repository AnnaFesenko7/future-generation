import { useTranslation } from 'react-i18next';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { StyledNav } from './Navigation.styled';

export const Navigation = ({ $modal, $footer, closeModal }) => {
  const { t } = useTranslation();
  return (
    <StyledNav
      $footer={$footer}
      $modal={$modal}
      onClick={() => {
        $modal && closeModal();
      }}
    >
      <CustomLink $footer={$footer} to="/about">
        {t('about')}
      </CustomLink>
      <CustomLink $footer={$footer} to="/news">
        {t('news')}
      </CustomLink>
      <CustomLink $footer={$footer} to="/partners">
        {t('partners')}
      </CustomLink>
      <CustomLink $footer={$footer} to="/activities">
        {t('activities')}
      </CustomLink>
    </StyledNav>
  );
};
