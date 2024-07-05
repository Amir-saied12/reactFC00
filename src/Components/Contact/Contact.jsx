import React from 'react'
import style from './Contact.module.scss'

export default function Contact() {
  return (
    <>
     <section className={`${style.contact}`}>
        <div className="container">
            <div className="row">
            <section className='py-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`${style.topSec} text-center`}>
                            <p>Contact<strong>/</strong>Home</p>
                            <h2>contact us</h2>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
      </section>

      <section className='my-5'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.7007963722153!2d31.208461825765436!3d30.074109817166963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410567a5dda3%3A0x8510219a993e6b1a!2z2KfZhNiz2YbYp9io2YTYjCDYudio2K8g2KfZhNmG2LnZitmF2Iwg2KXZhdio2KfYqNip2Iwg2YXYrdin2YHYuNipINin2YTYrNmK2LLYqQ!5e0!3m2!1sar!2seg!4v1719709797303!5m2!1sar!2seg"  frameborder="0"></iframe>
                </div>
                <div className="col-md-8">
                    <div className={`${style.text}`}>
                        <h2>story location</h2>
                        <p>It was not possible to renovate the two little houses on the land because they were in ruins.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className={` ${style.content} `}>
                                    <h2>NEW YORK STORE</h2>
                                    <p>785 15h Street, Office 478/B Green
                                        Mall Berlin, De 81566
                                        +888 999 777 66, +999 555 666 00
                                    </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={` ${style.content} `}>
                                    <h2>COMMERCIAL</h2>
                                    <p>785 15h Street, Office 478/B Green
                                        Mall Berlin, De 81566
                                        +888 999 777 66, +999 555 666 00
                                    </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={` ${style.content} `}>
                                    <h2>SUB OFFICE</h2>
                                    <p>785 15h Street, Office 478/B Green
                                        Mall Berlin, De 81566
                                        +888 999 777 66, +999 555 666 00
                                    </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={` ${style.content} `}>
                                    <h2>GERMANY STORE</h2>
                                    <p>785 15h Street, Office 478/B Green
                                        Mall Berlin, De 81566
                                        +888 999 777 66, +999 555 666 00
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
