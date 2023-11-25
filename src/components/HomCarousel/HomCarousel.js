import { Carousel } from 'components/Carousel/Carousel';
import { Item, ImgWrapper } from './HomCarousel.styled';
import img1 from 'img/1.jpg';
import img2 from 'img/2.jpg';
import img3 from 'img/3.jpg';

export const HomeCarousel = () => {
  return (
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
  );
};
