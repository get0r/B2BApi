import React from "react";
{/* PRODUCT IMAGES */}


import product02 from './assets/images/product-02.jpg';
import product03 from './assets/images/product-03.jpg';
import product04 from './assets/images/product-04.jpg';
import product05 from './assets/images/product-05.jpg';
import product06 from './assets/images/product-06.jpg';
import product07 from './assets/images/product-07.jpg';
import product08 from './assets/images/product-08.jpg';
import ProductView from "./productView";


{/*<!-- Related Products -->*/}
let RelatedProducts = function(){
    return (
<div>
	<section class="sec-relate-product bg0 p-t-45 p-b-105">
		<div class="container">
			<div class="p-b-45">
				<h3 class="ltext-106 cl5 txt-center">
					Related Products
				</h3>
			</div>

			{/*<!-- Slide2 -->*/}
		<ProductView />
			
		</div>
	</section> 
	
</div>
    )
};
export default RelatedProducts;
