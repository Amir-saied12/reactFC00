import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Home.module.scss'
import newYear from './img/new_year.svg'
import axios from "axios"

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//  animation
import AOS from 'aos'

export default function Home() {
    let [api, setApi] = useState([])

    async function getApi() {
       let { data } = await axios.get('https://fakestoreapi.com/products')
       console.log(data);
       setApi(data)
    }

    useEffect(() => {
        getApi()
        AOS.init({
            duration:2000,
            delay:2
        })
    }, []);
    return (
        <>
    <section>
        <div className="container" data-aos="fade-up">
        <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
      <div className={`${style.row}`}>
        <div className="col-lg-4">
        <img src={require('./img/M2_slider_01.png')} className={`d-block w-100 ${style.res}`} alt="slide"/>
        </div>
        <div className="col-lg-8 col-md-8">
        <div className={`p-5 end-0 top-0 start-0 bottom-0 text-end mt-5 position-relative ${style.a3dadat}`}>
            <img src={newYear} alt="newYear" />
            <h2>SPECIAL<br />SALE</h2>
            <button className="btn shop">SHOP NOW</button>
        </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`${style.row}`}>
        <div className="col-lg-4 col-md-4">
        <img src={require('./img/M2_slider_02.png')} className={`d-block w-100 ${style.res}`} alt="slide"/>
        </div>
        <div className="col-lg-8 col-md-8">
        <div className={`p-5 end-0 top-0 start-0 bottom-0 text-end mt-5 position-relative ${style.a3dadat}`}>
            <img src={newYear} alt="newYear" />
            <h2>SPECIAL<br />SALE</h2>
            <button className="btn shop">SHOP NOW</button>
        </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`${style.row}`}>
        <div className="col-lg-4">
        <img src={require('./img/M2_slider_03.png')} className={`d-block w-100 ${style.res}`} alt="slide"/>
        </div>
        <div className="col-lg-8 col-md-8">
        <div className={`p-5 end-0 top-0 start-0 bottom-0 text-end mt-5 position-relative ${style.a3dadat}`}>
            <img src={newYear} alt="newYear" />
            <h2>SPECIAL<br />SALE</h2>
            <button className="btn shop">SHOP NOW</button>
        </div>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </section>

    <section>
        <div className="container" data-aos="fade-up">
            <div className={`row justify-content-center ${style.edit}`}>
                <div className="col-lg-4">
                <h2 className={`text-u text-center ${style.title}`}>NEW ARRIVALS</h2>
                </div>
                    <Swiper
                    spaceBetween={40}
                    slidesPerView={4}
                    breakpoints={{
                        430: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1440:{
                            slidesPerView: 4,
                            spaceBetween: 60,
                        }
                      }}
                    >
                    {api.map((recipe,ind)=>
                    <SwiperSlide key={ind} className="w-auto swip">
                        <div className={`card border-0 ${style.sliCard}`}>
                            <div className={`${style.over}`}>
                            <img src={recipe.image} height={200} className={`${style.img_product}`}  alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                            </div> 
                            <div className="card-body">
                                <Link href="#"><span>rate: {recipe.rating.rate}</span></Link>
                                <p><Link href='#'>{recipe.category}</Link></p>
                                <p className={`${style.price}`}>{recipe.price} $</p>
                            </div>
                        </div>
                    </SwiperSlide>)}
                    </Swiper>
            </div>
        </div>
    </section>

    <section>
        <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className={`text-center ${style.title}`}>
        TOP COLLECTIONS
        </div>
        </div>
    <Swiper
      modules={[Navigation,A11y]}
      navigation
      spaceBetween={50}
      slidesPerView={4}
      breakpoints={{
        430: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024:{
            slidesPerView: 5,
            spaceBetween: 60,
        }
      }}
    >
      {api.map((recipe,ind)=>
      <SwiperSlide key={ind} className={`border border-black position-relative flex-shrink-1 m-0 w-auto ${style.topcollect}`}>
        <div className="overflow-hidden">
        <img src={recipe.image} width={350} height={300} alt="" /> 
        </div>
        <a href="#" className={`d-none ${style.t3del}`}>{recipe.category}</a>
      </SwiperSlide>
      )}
    </Swiper>
      </div>
        </div>
    </section>   

    <div className="my-5">
        <div className={`${style.sliding_text_container}`}>
            <div className={`${style.sliding_text_content}`}>
            <strong>LAST SEASON SALE </strong>SPECIAL SALE<strong>LAST SEASON SALE </strong>SPECIAL SALE
            </div>
        </div>    
    </div> 

    <section className={`${style.bg} p-4`}>
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className={`${style.title_deal}`}>
                    <span className="pt-2 pb-1 d-block">SPECIAL OFFER ONLY FOR SALE ONLINE</span>
                    <h2>FASHION FOR WARM DAYS</h2>
                    </div>
                </div>
                <ul className={`row justify-content-center align-items-center text-center ${style.time}`}>
                    <li>12 <span>day</span></li>
                    <li>22<span>hour</span></li>
                    <li>32<span>min</span></li>
                    <li>43<span>sec</span></li>
                </ul>
                <div className="w-auto pb-5">
                <button className={`${style.bttn}`}>Discovery now</button>
                </div>
            </div>    
        </div>    
    </section>  

    <section className=" border-bottom border-black p-5">
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className={`text-center ${style.title}`}>
                    LAST CHANCE
                    </div>
                </div>
            </div>    
            <div className={`row justify-content-center ${style.filtrtion}`}>
                <div className="col-lg-5">
                <ul className="row justify-content-evenly p-0 text-uppercase">
                    <li className={`${style.activeFilter}`}>man</li>
                    <li>women</li>
                    <li>kids</li>
                    <li>accessories</li>
                </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_01_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_04_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_05_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_06_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_01_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_04_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_05_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={`card border-0 ${style.sliCard}`}>
                    <div className={`${style.over}`}>
                            <img src={require(`./img/p_m2_06_1.jpg`)} height={200} width={200} alt="img-product" />
                                <div className={`d-none ${style.overlay}`}>
                                <button><i className="fa-solid fa-cart-shopping"></i>select option</button>
                            <i className={`fa-solid fa-magnifying-glass ${style.sear}`}></i>
                                </div>
                    </div> 
                    <div className="card-body">
                                <Link href="#"><span>rate: 5</span></Link>
                                <p><Link href='#'>Lorem, ipsum dolor.</Link></p>
                                <p className={`${style.price}`}>20 $</p>
                    </div>
                </div>
                </div>
            </div>
        </div>    
    </section>

    <section className="py-5 border-bottom border-black">
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center text-center">
            <Swiper
                modules={[Navigation,A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className="comment">
                        <div className={`${style.text}`}>
                        “The quality of the fabric is excellent and the fit is perfect”
                        </div>
                        <div className={`${style.img}`}>
                            <img src={require('./img/avt.png')} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="comment">
                        <div className={`${style.text}`}>
                        “The quality of the fabric is excellent and the fit is perfect”
                        </div>
                        <div className={`${style.img}`}>
                            <img src={require('./img/avt.png')} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.comment}`}>
                        <div className={`${style.text}`}>
                        “The quality of the fabric is excellent and the fit is perfect”
                        </div>
                        <div className={`${style.img}`}>
                            <img src={require('./img/avt.png')} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>  

    <section className="pt-5">
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className={`${style.title} text-center`}>
                    NEWSLETTER
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
            <div className="col-lg-7">
                <p className={`text-center ${style.end_p}`}>Sign up to get 10% off your first order and stay up to date special offers and news</p>
            </div>
                <div className="col-lg-7">
                    <form action="#" className={`${style.form_end}`}>
                        <input type="text" name="email" id="email"placeholder="Enter your email adress" />
                        <button>subscripe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0">
        <div className="row w-100">
            <div className={`${style.img_hover} p-0`}>
                <img src={require('./img/instagram_01.jpg')} alt="" />
            </div>
            <div className={`${style.img_hover} p-0`}>
                <img src={require('./img/instagram_02.jpg')} alt="" />
            </div>
            <div className={`${style.img_hover} p-0`}>
                <img src={require('./img/instagram_03.jpg')} alt="" />
            </div>
            <div className={`${style.img_hover} p-0`}>
                <img src={require('./img/instagram_04.jpg')} alt="" />
            </div>
            <div className={`${style.img_hover} p-0`}>
                <img src={require('./img/instagram_05.jpg')} alt="" />
            </div>
        </div>
        </div>
    </section>           
    </>
  )
}
