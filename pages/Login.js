import styles from "../styles/login.module.css"
import Head from"next/head"
import Link from"next/link"
import Image from 'next/image'
import PayPal from '../public/momgram.png'
import First from "./First"
 export const Login = () => {
        const getInput =() =>{
            var text = document.getElementById("text").value;
            console.log(text)
        }
    
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;900&display=swap" 
                rel="stylesheet"/>
            </Head>
        <div className={styles.container}> 


            <form className={styles.borders}>
                <div className={styles.logo}>
                    <Image src={PayPal} alt="logo" width={30} height={40}/>
                </div>
                <div className={styles.input}>
                    <input id="text" type="Email" autoComplete="text" placeholder="Email or mobile number"/>
                </div>
                <div  className={styles.input1}>
                    <input id="text" type="password" autoComplete="text" placeholder="Password"/>
                </div>
                <div className={styles.forget}>
                    <a href="#">Forget Password?</a>
                </div>
                <Link href="/First">
                <div className={styles.Login} onClick={getInput}>
                   <a href="#"> Log In</a>
                </div>
                </Link>
                <div className={styles.hrOr}>
                    <hr className={styles.hr}/> 
                    <hr className={styles.hr1}/>
                   <div className={styles.or}>or</div>

                </div>
                
                <div className={styles.SignUp}>
                  <a href ="/">Sign Up</a>
                  
                </div>
            </form>
            
            <div className={styles.footer}>
                <div className={styles.footerName}>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy</a>
                    <a href="#">Legal</a>
                    <a href="#">Worldwide</a>
                </div>
            </div>
        </div>
        </div>
    )
}
