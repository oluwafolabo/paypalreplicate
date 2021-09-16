import Image from 'next/image'
import PayPal from '../public/logo.svg'
import styles from "../styles/first.module.css"
import Link from"next/link"
import Head from"next/head"
import Background from "../public/background.jpg"
import Buyonline from '../public/buyonline_browser1.png'
import Buyonline1 from '../public/buyonline_browser2.png'
import Buyonline2 from '../public/buyonline_browser3.png'
import Icon from '../public/icon1.png'
import Homepage from '../public/homepage-hero.jpg'
const First = () => {
    const itCloseUp=()=>{

         
   
    }
    return (
        <div>
             <Head>
             <link
                    href="https://fonts.googleapis.com/css2?family=Inter"
                    rel="stylesheet"
                    />
            </Head>
            <div>
                <nav className={styles.nav}>
                    <div className= {styles.menu}>
                    <Link href="/"><a>Menu</a></Link>
                    </div>
                    
                    <div className={styles.logo} onClick={itCloseUp}>
                        <Image src={PayPal} alt="logo" width={90} height={30}/>
                    </div>
                    <div className={styles.PERSONAL} onMouseOver={itCloseUp}>
                    <Link href="/"><a>PERSONAL</a></Link>
                    </div >
                    <ul>
                     
                        <Link href="/" ><a className={styles.login}>Log In</a></Link>
                       
                        <Link href="/"><a className={styles.signup}>Sign Up</a></Link>
                    </ul>

                </nav>

                <div className={styles.dropdown}>

                </div>
                <div className={styles.dropdown1}>
                    <div className={styles.background1}>
                        <Image src={Homepage} alt="logo" width={0}height={480} className={styles.Background} />
                    </div>
                     <div className={styles.overLay}>
                         <h1 className={styles.FirstLine}>The simpler, safer way to pay online.</h1>
                         <div className={styles.signFree}>
                         <Link href="/"><a>Sign Up for Free</a></Link>
                        
                         </div>
                         <div className={styles.own}>
                         <h1>Own a business?
                              <Link href="/"><a className={styles.signup}> Open a Business Account
                        </a></Link></h1>
                        </div>
                     </div>
                </div>
                
               {/*bod*/}

               <div className={styles.paypal}>
                   <h6> Paypal is for everyone who pays is online</h6>
                   <div className={styles.icon} onClick={itCloseUp}>
                        <Image src={Icon} alt="logo"/>
                    </div>
                    <div className={styles.Individual}>
                        <h1> Individuals</h1>
                    </div>
                    <div className={styles.Find}>
                        <h1> Find out why we have more than 200M active accounts worldwide.</h1>
                    </div>
                    <div className={styles.Learn} >
                        <Link href="/"><a className={styles.signup}>Learn More</a></Link>
                    </div>
               </div>

                {/* another body*/}
                
                <div className={styles.flex}>
                    <h1 className={styles.connect}> Paypal connects buyers and sellers</h1>
                    <div className={styles.buyers}>
                        <h1>For Buyers</h1>
                    </div>

                    {/* flexbox*/}
                    <div className={styles.flexbox}>
                        {/* flexbox1*/}
                        <div className={styles.flexbox1}>
                            <div>
                                <Image src={Buyonline} alt="logo"/>
                            </div>
                            <div className={styles.line}>
                                <div className={styles.number}>
                                    <h1>1</h1>
                                </div>
                                <div>
                                    
                                    <h1>
                                    <Link href="/"><a className={styles.signup}> Sign Up
                                    </a></Link> with just an email address and password</h1>
                                </div>
                            </div>
                        </div>
                              {/* flexbox2*/}
                        <div className={styles.flexbox2}>
                            <div>
                                <Image src={Buyonline1} alt="logo"/>
                            </div>
                            <div className={styles.line}>
                                <div className={styles.number}>
                                    <h1>2</h1>
                                </div>
                                <div>
                                    
                                    <h1>Secure add your card</h1>
                                </div>
                            </div>
                        </div>
                         {/* flexbox3*/}
                         <div className={styles.flexbox3}>
                            <div className={styles.image}>
                                <Image src={Buyonline2} alt="logo" />
                            </div>
                            <div className={styles.line}>
                                <div className={styles.number}>
                                    <h1>3</h1>
                                </div>
                                <div>
                                     <h1>Use the paypal button check out with just an email address and password</h1>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={styles.learnMore}>
                        <h1><Link href="/">Learn More</Link></h1>
                    </div>
                </div>

                 {/* flex2*/}

                <div className={styles.flex2}>
                    <h1 className={styles.connect}>Join 200M active paypal accounts worldwide</h1>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <h1 className={styles.boxTop}>Safer and protected</h1>
                            <h1 className={styles.boxTop1}>Shop with peace of mind. We don’t share your full financial information with sellers. And PayPal Buyer Protection 
                                covers your eligible purchases if they don’t show up or match their description.</h1>
                            <h1 className={styles.boxTop2}><Link href="/">More about security</Link></h1>   
                         </div>
                             {/* box2*/}
                         <div className={styles.box2}>
                            <h1 className={styles.boxTop}>Simple and convenient</h1>
                            <h1 className={styles.boxTop1}>Pay online with your PayPal password and skip entering your financial information. Or pay even faster with One Touch™, stay logged in and check out without entering your password.
                                Plus, rest assured knowing Buyer Protection is available for your eligible purchases.</h1>
                            <h1 className={styles.boxTop2}><Link href="/">More about One Touch™</Link></h1>   
                         </div>
                             {/* box3*/}
                             <div className={styles.box3}>
                            <h1 className={styles.boxTop}>Mostly free, always upfront</h1>
                            <h1 className={styles.boxTop1}>It’s free to open a PayPal account and buy something using 
                                PayPal unless it involves a currency conversion.</h1>
                            <h1 className={styles.boxTop2}><Link href="/">More about security</Link></h1>   
                         </div>
                    </div>
                </div>
                 {/* flex3*/}

                 <div className={styles.started}>
                     <h1>Sign up and get started.</h1>
                     <div className={styles.startedButton}><Link href="/"><a>Get Started</a></Link></div>
                 </div>

                  {/* flex3*/}
                  <div className={styles.footer}>
                        <div className={styles.footerLink}>
                            <Link href="/" ><a className={styles.login}> Help and Contact</a></Link>
                            <Link href="/"><a className={styles.signup}> Fees</a></Link>
                            <Link href="/"><a className={styles.signup}> Security</a></Link>
                            <Link href="/"><a className={styles.signup}> Shop</a></Link>
                            <Link href="/"><a className={styles.signup}> Features</a></Link>
                        </div>
                        <div className={styles.footerImage}>
                            <Image src={PayPal} alt="logo" width={90} height={30}/>
                        </div>
                       
                  </div>
                  <hr className={styles.hr}/>
            </div>
        </div>
    )
}
export default First