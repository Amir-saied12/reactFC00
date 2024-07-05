import React from 'react'
import style from './About.module.scss'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function About() {
  return (
    <>
      <section className={`${style.about}`}>
        <div className="container">
            <div className="row">
            <section className='py-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`${style.topSec} text-center`}>
                            <p>Home<strong>/</strong>about</p>
                            <h2>about us</h2>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
      </section>

      <section className='align-items-center my-5'>
        <div className="container">
            <div className="row justify-content-between p-4 h-100">
                <div className="col-md-6 col-sm-8">
                    <img src={require('./img/about_1.jpg')} className='w-100 h-100' alt="" />
                </div>
                <div className="col-md-6 col-sm-8">
                    <div className={`${style.text} h-100`}>
                        <h2>where fashion meets expression</h2>
                        <p>Welcome to JAVAX, your ultimate destination for discovering, expressing,
                         and embracing your unique fashion identity. At ElevateStyle, we believe
                          that fashion is more than just clothing; it's a powerful form of self-expression
                           that allows you to showcase your personality, creativity, and individuality to the
                            world. Our online fashion emporium is dedicated to curating a diverse and curated
                             collection of apparel and accessories that 
                        inspire you to confidently express who you are, both inside and out.</p>
                        <button>shopping now</button>
                    </div>
                </div>
                <div className="col-md-12">
                <div className={`${style.bar} my-5`}>
                        <ul className={`row justify-content-between align-items-center`}>
                            <li>our story</li>
                            <li>our vision</li>
                            <li>what we offer</li>
                        </ul>
                        <p>ElevateStyle was born out of a passion for fashion and a desire to create a platform where every individual can explore and experiment with their personal style. Founded in [Year], our journey began with a simple yet powerful idea: to provide a space where fashion enthusiasts, trendsetters, and style-conscious individuals can find pieces that resonate with their own unique flair. Over the years, we have evolved into a thriving community that celebrates diversity, inclusivity, and the ever-evolving world of fashion.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className={`text-center ${style.title}`}>
                     TOP COLLECTIONS
                </div>
                </div>
            </div>
        </div>
            <Swiper
            spaceBetween={0}
            slidesPerView={4}
            >
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-01.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Harper Johnson</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-02.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Sophia Anderson</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-03.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Olivia Patel</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-04.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Emma Ramirez</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-01.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Harper Johnson</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-02.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Sophia Anderson</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-03.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Olivia Patel</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.img_slid} position-relative`}>
                        <img src={require('./img/team-04.jpeg')} alt="sora" />
                        <div className={`${style.btn_slid}`}>
                            <button>Emma Ramirez</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper className={`${style.stySlid}`}
                spaceBetween={50}
                slidesPerView={5}
            >
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_01.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_02.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_03.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_04.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_05.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_01.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_02.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_03.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_04.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.logo_slid}`}>
                        <img src={require('./img/M1_logo_05.png')} alt="logo bottom page" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <h1 className={`text-uppercase text-center ${style.h1bottom}`}>get in touch<i class="fa-regular fa-arrow-right"></i></h1>
      </section>
    </>
  )
}
