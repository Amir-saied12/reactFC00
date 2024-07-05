import React from 'react'
import style from './Order.module.scss'

export default function Order() {
  return (
    <>
        <section className={`${style.order}`}>
        <div className="container">
            <div className="row">
            <section className='py-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`${style.topSec} text-center`}>
                            <p>Home<strong>/</strong>order tracking</p>
                            <h2 className='text-uppercase'>order tracking</h2>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className={`${style.txt} p-5`}>
                        <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    </div>
                    <div className={`${style.inputs} p-5 m-auto`}>
                        <label htmlFor="order">order id</label>
                        <input type="text" className='w-100 mb-5' placeholder='Found in your order confirmation email.'/>
                        <br />
                        <label htmlFor="order">Billing email</label>
                        <input type="text" className='w-100' placeholder='Email you used during checkout.'/>

                        <button>track</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
