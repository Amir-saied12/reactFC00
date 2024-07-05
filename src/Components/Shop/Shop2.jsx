import React, { useEffect, useState } from 'react'
import style from './Shop.module.scss'
import axios from 'axios'
<style />
export default function Shop2() {
    let [api , setApi] =useState([])
    async function getApi() {
        let {data} = await axios.get('https://fakestoreapi.com/products')
        console.log(data);
        setApi(data)
    } 

    useEffect(() => {
        getApi();
    }, []);

  return (
    <>
        <main>
            <section className='py-5'>
        <div className="container">
            <div className="row justify-content-center">
                <div className={`${style.topSec} text-center`}>
                    <h2>Shop</h2>
                    <p>Home<strong>/</strong>shop</p>
                </div>
            </div>
        </div>
            </section>
    
            <section className='p-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card border-2 border-black py-2">
                        <div className="py-2">
                            <h4 className='text-center text-uppercase border-bottom border-2 border-black'>
                                categories
                            </h4>
                            <div className="card border-0 text-capitalize">
                                <li className='text-black px-3'>bags</li>
                                <li className='text-black px-3'>man</li>
                                <li className='text-black px-3'>boy</li>
                                <li className='text-black px-3'>women</li>
                                <li className='text-black px-3'>watches</li>
                                <li className='text-black px-3'>shoes</li>
                            </div>
                        </div>

                        <div className="py-2">
                            <h4 className='text-center text-uppercase border-bottom border-top border-2 border-black'>
                                price
                            </h4>
                            <div className="card border-0 text-capitalize">
                                <input type="range" min={30} max={130} color='black' />
                                <p className='px-3'>min price: 15$</p>
                                <p className='px-1'>max price: 130$</p>
                            </div>
                        </div>

                        <div className="py-2">
                            <h4 className='text-center text-uppercase border-bottom border-top border-2 border-black'>
                                color
                            </h4>
                            <div className="card border-0 text-capitalize">
                                <li className={`text-black ps-5 ${style.color}`}>black</li>
                                <li className={`text-black ps-5 ${style.color}`}>red</li>
                                <li className={`text-black ps-5 ${style.color}`}>blue</li>
                                <li className={`text-black ps-5 ${style.color}`}>white</li>
                                <li className={`text-black ps-5 ${style.color}`}>green</li>
                                <li className={`text-black ps-5 ${style.color}`}>yellow</li>
                            </div>
                        </div>

                        <div className="py-2">
                            <h4 className='text-center text-uppercase border-bottom border-top border-2 border-black'>
                                size
                            </h4>
                            <div className={`card border-0 text-capitalize ${style.list_none}`}>
                                <li className='text-black ps-5 text-uppercase'>l</li>
                                <li className='text-black ps-5 text-uppercase'>m</li>
                                <li className='text-black ps-5 text-uppercase'>s</li>
                                <li className='text-black ps-5 text-uppercase'>xl</li>
                                <li className='text-black ps-5 text-uppercase'>xs</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                    {api.map((data, ind)=> <div className='col-md-4' key={ind}>
                        <div className={`card border-0 p-3 ${style.cards2} my-3`}>
                            <img src={data.image} height={200} alt="sora" />
                            <div className="card-body">
                                <span>man</span>
                                <h6>{data.category}</h6>
                                <p>{data.price}</p>
                            </div>
                        </div>
                    </div>)}
                    </div>
                </div>
            </div>
        </div>
            </section>
        </main>
    </>
  )
}
