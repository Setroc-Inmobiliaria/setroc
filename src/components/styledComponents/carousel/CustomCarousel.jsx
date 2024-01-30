import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


const CustomCarousel = ({imagenes, className}) => {
    return (
        <div className={className}> 
        <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        totalSlides={imagenes?.length}
        infinite={true}
        className={className}
        interval={3000}
isPlaying={true}

        // hasMasterSpinner={true}
      >
        <Slider className={`h-96 w-full` } >
          {imagenes?.map((img, index) => {
            return (
              <Slide index={index}>
                <img
                key={index}
                  className="h-96 w-full object-cover object-botom"
                  src={img}
                  alt="terreno"
                />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider></div>

       
    )
}

export default CustomCarousel