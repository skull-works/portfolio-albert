
import React from 'react';
import './artist-solo.css';
import BackButton from './components/back-button';


const Pat = () => {
    return(
    <>  
        <title>Patricia Panglinan</title>
        {/* <title>Coming soon</title> */}
        <div className="h-100vh flex flex-col md:flex-row relative">
            <BackButton />
            <div className="h-50vh xs:h-54vh sm:h-60vh md:h-100vh md:w-5/12">
                <div className='rectangle-wrapper h-50vh w-7/12  mx-auto pl-0 md:pl-0 pt-8 xss:pt-8 sm:pt-6 md:pt-20'>
                    <div className='rectangle'>
                        {/* <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/Soon.png')} alt="sample"/> */}
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/2pat.jpg')} alt="sample"/>
                    </div>
                </div>
            </div>
            <div className="h-50vh xs:h-46vh sm:h-40vh md:h-100vh md:w-8/12">
                <div className="w-10/12 xs:w-8/12 md:w-9/12 lg:w-10/12 mx-auto md:mt-20 text-center">
                    <h1 className="leading-tight">
                        <span className="header font-Cinzel">Patricia</span> <br /> 
                        <span className="header2 font-Cinzel pl-10vh xss:pl-15vh md:pl-20vh lg:pl-34vh">Panglinan</span>
                        {/* <span className="header font-Cinzel">Coming</span> <br /> 
                        <span className="header2 font-Cinzel pl-10vh xss:pl-20vh md:pl-27vh lg:pl-40vh">soon</span> */}
                    </h1>
                    <br />
                    <br />
                     <p className="font-Raleway text-sm xs:text-md md:text-lg lg:text-xl text-justify">
                    Patricia, a multimedia artist who specializes in graphic design, expresses her work in unconventional styles.
                    For her, process, progress, and constant improvement are the three aspects that allow her to explore other forms of art like film,
                    photography, and especially painting. She tries to go out of her comfort zone and dares to learn new techniques that can help her grow, 
                    and most importantly, she finds beauty and serenity in the process while not forgetting the significance of patience.
                    </p>
                </div>
                <div className=" md:w-9/12 lg:w-10/12 mx-auto mt-6 sm:mt-8 md:mt-16 lg:mt-20">
                    <div className="w-15vh h-20vh pt-16 sm:pt-0 lg:pt-20 mx-auto relative">
                        <img className="object-cover absolute top-0" src={require("../../../images/LOGO.png")} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Pat;