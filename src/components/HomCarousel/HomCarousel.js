import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'components/Carousel/Carousel';
import { Item, ImgWrapper, MobileWrapper } from './HomCarousel.styled';
import img1 from 'img/1.jpg';
import img2 from 'img/2.jpg';
import img3 from 'img/3.jpg';

export const HomeCarousel = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      {isMobileDevice && (
        <MobileWrapper>
          <Item>
            <ImgWrapper $imgUrl={img1} />
          </Item>
          <Item>
            <ImgWrapper $imgUrl={img2} />
          </Item>
          <Item>
            <ImgWrapper $imgUrl={img3} />
          </Item>
        </MobileWrapper>
      )}
      {!isMobileDevice && (
        <Carousel>
          <Item>
            <ImgWrapper $imgUrl={img1} />
          </Item>
          <Item>
            <ImgWrapper $imgUrl={img2} />
          </Item>
          <Item>
            <ImgWrapper $imgUrl={img3} />
          </Item>
        </Carousel>
      )}
    </>
  );
};
