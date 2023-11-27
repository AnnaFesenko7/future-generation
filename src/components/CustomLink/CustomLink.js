import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = ({ children, to, $footer, ...p }) => {
  const match = useMatch(to);

  return (
    <StyledLink to={to} match={match} $footer={$footer}>
      {children}
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  white-space: nowrap;
  color: ${p =>
    p.match
      ? p.theme.colors.accentColor
      : p.$footer
      ? p.theme.colors.white
      : p.theme.colors.black};
  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
