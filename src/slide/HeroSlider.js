import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

function HeroSlider({
  banner1,
  banner2,
  banner3,
  Banner1Text,
  Banner2Text,
  Banner3Text,
}) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <Wrapper>
        <img src={banner1} alt="banner png" />
        {Banner1Text ? <Banner1Text /> : null}
      </Wrapper>
      <Wrapper>
        <img src={banner2} alt="banner png" />
        {Banner2Text ? <Banner2Text /> : null}
      </Wrapper>
      <Wrapper>
        <img src={banner3} alt="banner png" />
        {Banner3Text ? <Banner3Text /> : null}
      </Wrapper>
    </Slider>
  );
}

const Wrapper = styled.section`
  position: relative;
  img {
    width: 100%;
  }
`;

export default HeroSlider;
