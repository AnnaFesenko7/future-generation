import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
  @media ${p => p.theme.media.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.white};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  /* font-family: 'AvenirNextCyrLight'; */
`;

export const StyledLi = styled.li`
  gap: 4px;
  display: flex;
  align-items: baseline;
`;
