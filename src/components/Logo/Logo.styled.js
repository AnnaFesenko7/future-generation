import styled from 'styled-components';

export const LogoText = styled.div`
  font-family: 'AvenirNextCyrBold';
  text-transform: uppercase;
`;
export const LogoWrapper = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 30px;
    @media ${p => p.theme.media.tablet} {
      width: 55px;
    }
  }
`;

export const StyledSpan = styled.span`
  font-family: 'AvenirNextCyrLight';
  margin-right: 4px;
`;
