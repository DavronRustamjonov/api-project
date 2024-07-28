import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Images.css'; 

function Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BaseUrl = 'https://autoapi.dezinfeksiyatashkent.uz/api/';
  const ImgUrl = `${BaseUrl}uploads/images/`;

  const getImages = () => {
    setLoading(true); 
    axios.get(`${BaseUrl}cities`)
      .then(response => {
        setImages(response.data.data);
        setError(null);
      })
      .catch(error => {
        setError('Xatolik');
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  useEffect(() => {
    getImages(); 
  }, []);

  return (
    <div className='container images-container'>
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Spin />
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={`${ImgUrl}${image.image_src}`} 
                alt={`Slide ${index}`} 
                style={{ width: '90%', height: '90vh' }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Images;
