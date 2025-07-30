import style from "../s/header.module.css";
import Kuma from "next/image";
import pfp from "../../public/image/download (2).jpeg";
import React from "react";

const Header: React.FC = () => {
    return (
        <>
            
            

            <section className="col-12 grid-12">
                <div className={style.card1}>
                    <h1 className={style.profile}>nama saya Rafi al khawarizmi</h1>
                    <p className={style.text}>backend dev</p>

                     

                </div>
                <img className={style.gambar} src="data:image/jpeg;base64,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" alt="amba" />
                <div className={style.card2}>
                <div className={style.cardRight}>
                    <h2>awal mula saya coding</h2>
                    <p>mula mula saya masuk telkom lalu saya belajar coding 
                    setelah itu saya ketagihan
                    </p>

                </div>
                </div>
                <div className={style.pfp}>
                    

                    <div className={style.card1}>
                        <h2>gtw lg</h2>
                    <Kuma 
                        src={pfp}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full w-64 h-64 object-cover col-6" />


                        </div>
                        
                </div>


                {/* Kartu di samping kanan */}
            </section>
        </>
    );
}

export default Header
