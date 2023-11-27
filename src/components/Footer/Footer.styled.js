import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterStyled = styled.footer`
  color: ${p => p.theme.colors.white};
`;

export const FooterTop = styled.div`
  background-color: ${p => p.theme.colors.footerTop};
`;
export const FooterBottom = styled.div`
  background-color: ${p => p.theme.colors.footerBottom};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledP = styled.span`
  margin-top: 16px;
`;

export const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;

  /* font-size: 8px; */
  @media ${p => p.theme.media.tablet} {
    font-size: 12px;
  }

  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
  }
`;

export const LogoLink = styled(Link)`
  color: ${p => p.theme.colors.white};
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
  @media ${p => p.theme.media.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.white};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
