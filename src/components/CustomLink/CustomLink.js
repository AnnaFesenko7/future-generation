import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = ({ children, to, ...p }) => {
  const match = useMatch(to);

  return (
    <StyledLink to={to} match={match}>
      {children}
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  white-space: nowrap;
  color: ${p => (p.match ? p.theme.colors.accentColor : p.theme.colors.black)};
  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
