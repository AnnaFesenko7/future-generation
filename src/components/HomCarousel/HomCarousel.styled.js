import styled from 'styled-components';
// import img1 from 'img//1.jpg';

export const Item = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 100%;

  padding: 8px;
  @media ${p => p.theme.media.tablet} {
    padding: 10px;
  }
  @media ${p => p.theme.media.desktop} {
    padding: 30px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-image: url(${p => p.$imgUrl});
  background-repeat: no-repeat;

  border-radius: 4px;
  @media ${p => p.theme.media.tablet} {
    border-radius: 5px;
    height: 100%;
  }
  @media ${p => p.theme.media.desktop} {
    border-radius: 15px;
  }
`;
export const MobileWrapper = styled.div`
  width: 100%;
`;
