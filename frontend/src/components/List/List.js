import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from "../ListItem/ListItem";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import {useRef} from "react";

SwiperCore.use([Navigation]);

const List = ({list, slidesPerView, slidesPerGroup, spaceBetween, i}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="list">
      <div className="list__title">{list.title}</div>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
      >
        <div className='swiper-button swiper-button-prev' ref={prevRef}><ArrowBackIosOutlined/></div>
        {list.content.map(id => (<SwiperSlide key={id}><ListItem id={id}/></SwiperSlide>))}
        {list.content.map(id => (<SwiperSlide key={id}><ListItem id={id}/></SwiperSlide>))}
        {list.content.map(id => (<SwiperSlide key={id}><ListItem id={id}/></SwiperSlide>))}
        {list.content.map(id => (<SwiperSlide key={id}><ListItem id={id}/></SwiperSlide>))}
        {list.content.map(id => (<SwiperSlide key={id}><ListItem id={id}/></SwiperSlide>))}
        <div className='swiper-button swiper-button-next' ref={nextRef}><ArrowForwardIosOutlined/></div>
      </Swiper>
    </div>
  )
}

export default List;