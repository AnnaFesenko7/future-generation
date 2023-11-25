import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterStyled = styled.footer`
  color: ${p => p.theme.colors.white};
`;

export const FooterTop = styled.div`
  background-color: ${p => p.theme.colors.footerTop};
`;
export const FooterBottom = styled.div`
  background-color: ${p => p.theme.colors.footerTop};
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  /* color: white !important; */
  color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
