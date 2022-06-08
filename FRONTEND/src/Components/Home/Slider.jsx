import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div>
        <Carousel>
                <div>
                    <img src="https://im.uniqlo.com/global-cms/spa/resbcebb932e00e3183ace75bfe7103eaf5fr.jpg" />
                    <p  className="legend">Image 1</p>
                </div>
                <div>
                    <img src="https://im.uniqlo.com/global-cms/spa/res7dd04164bdce767d26c7c65432fd83f2fr.jpg" />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img src="https://im.uniqlo.com/global-cms/spa/resd87c00a4c33069b68cdb0ea50868606bfr.jpg" />
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Slider
