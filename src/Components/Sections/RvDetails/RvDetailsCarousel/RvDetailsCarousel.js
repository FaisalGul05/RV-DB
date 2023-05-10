import { RVCarouselRatings } from '../../../../Constants/Data';
import RvReview from './RvReview';
import "./RvDetailsCarousel.css";
import Slider from "react-slick";
import '../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import leftArrowImage from '../../../Svg/RvCarouselLeft.svg'
import rightArrowImage from '../../../Svg/RvCarouselRight.svg'
import { useMediaQuery, useTheme } from '@mui/material';

const CustomArrowStyle = {
    background: "red", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1.8rem', backgroundColor: '#599cb5', backgroundBlendMode: 'multiply'
}


function SampleNextArrow(props) {
    const theme = useTheme()
    const matchesLg = useMediaQuery(theme.breakpoints.down('lg'))
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'))
    const { className, style, onClick } = props;

    if (matchesSm) {
        return (
            <div
                className={className}
                style={{
                    ...style,
                }}
                onClick={onClick}>
            </div>
        );
    }
    return (
        <div
            className={className}
            style={{
                ...style, ...CustomArrowStyle, background: `url(${rightArrowImage})`,
                height: `${matchesLg ? matchesMd ? '260px' : '260px' : '260px'}`,
                width: `${matchesLg ? matchesMd ? '70px' : '100px' : '120px'}`
            }}
            onClick={onClick}>
            <div className='arrow right'>
                <img />
            </div>
        </div>
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const theme = useTheme()
    const matchesLg = useMediaQuery(theme.breakpoints.down('lg'))
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'))
    if (matchesSm) {
        return (
            <div
                className={className}
                style={{
                    ...style,
                }}
                onClick={onClick}>
            </div>
        );
    }
    return (
        <div
            className={className}
            style={{
                ...style, ...CustomArrowStyle, background: `url(${leftArrowImage})`,
                height: `${matchesLg ? matchesMd ? '260px' : '260px' : '260px'}`,
                width: `${matchesLg ? matchesMd ? '70px' : '100px' : '120px'}`
            }}
            onClick={onClick}>
            <div className='arrow left'>
                <img />
            </div>
        </div>
    );
}


function RvDetailsCarousel() {


    const theme = useTheme()
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'))

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dotsClass: "button__bar",
    };

    const renderReview = RVCarouselRatings.map((item, index) => (
        <RvReview key={index} name={item.name} rating={item.rating} />
    ))
    return (
        <div className="RvDetailsCarousel-Container">
            <Slider {...settings}>
                {renderReview}
            </Slider>
        </div>
    )
}

export default RvDetailsCarousel