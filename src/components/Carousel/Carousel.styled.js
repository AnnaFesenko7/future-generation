import styled from 'styled-components';

export const CarouselSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  position: relative;
  @media ${p => p.theme.media.tablet} {
    height: 420px;
  }
  @media ${p => p.theme.media.desktop} {
    height: 700px;
  }

  svg {
    z-index: 10;
    :hover {
    }
    fill: ${p => p.theme.colors.accentColor};
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const CarouselWindow = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  transition: transform 500ms ease-in-out;
`;
