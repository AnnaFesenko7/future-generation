import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
  gap: 16px;
  text-transform: uppercase;
  font-family: 'AvenirNextCyrBold';
  font-size: 10px;
  @media ${p => p.theme.media.tablet} {
    font-size: 12px;
  }

  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
  }
`;

export const LogoLink = styled(Link)`
  text-align: center;
  img {
    width: 100px;
    /* @media ${p => p.theme.media.tablet} {
      width: 150px;
    } */

    @media ${p => p.theme.media.desktop} {
      width: 200px;
    }
  }
`;

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.header};
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${p => p.theme.space[4]}px;
  width: ${p => p.size}px;
  cursor: pointer;
  @media ${p => p.theme.media.tablet} {
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const StyledTel = styled.a`
  font-family: 'AvenirNextCyrBold';
  white-space: nowrap;
  color: ${p => p.theme.colors.tel};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const DonationBtn = styled(Link)`
  text-align: center;
  white-space: nowrap;
  font-family: 'AvenirNextCyrBold';
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding: 16px;
  border-radius: 10px;
`;

export const HeaderContentWrapper = styled.div`
  display: ${p => (p.logo ? 'flex' : 'none')};
  align-items: center;
  gap: 4px;
  @media ${p => p.theme.media.tablet} {
    gap: 8px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;
