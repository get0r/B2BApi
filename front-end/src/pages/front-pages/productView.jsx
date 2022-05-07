import React from "react";
import ProductCard from "./productCard";


{/* PRODUCT IMAGES */}


import product02 from './assets/images/product-02.jpg';
import product03 from './assets/images/product-03.jpg';
import product04 from './assets/images/product-04.jpg';
import product05 from './assets/images/product-05.jpg';
import product06 from './assets/images/product-06.jpg';
import product07 from './assets/images/product-07.jpg';
import product08 from './assets/images/product-08.jpg';
import product09 from './assets/images/product-09.jpg';
import product10 from './assets/images/product-10.jpg';
import product11 from './assets/images/product-11.jpg';
import product12 from './assets/images/product-12.jpg';
import product13 from './assets/images/product-13.jpg';
import product14 from './assets/images/product-14.jpg';
import product15 from './assets/images/product-15.jpg';
import product16 from './assets/images/product-16.jpg';


let ProductView = function(){
    return(
        <div>
          <div className="row isotope-grid">
           
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            <ProductCard />
           </div>

          </div>

        </div>
    )
};
export default ProductView;