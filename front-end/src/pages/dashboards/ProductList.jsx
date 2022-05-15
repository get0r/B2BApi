import React from "react";
import ItemCard from "../../components/dashboard/ItemCard";
import Pagination from "../../components/dashboard/pagination";
import ProductNavigation from "../../components/dashboard/ProductNavigation";
import Sidebar from "../../components/dashboard/Sidebar";
import Table from "../../components/dashboard/Table";



let ProductList = function(){
    return(
        <div className="flex">
            <div className="flex-none w-30">
                <Sidebar />

            </div>
            <div className="flex-initial w-100">
        <div class="h-full w-full ">
          {/* <!-- Place your content here -->
          <!-- component --> */}
        <ProductNavigation />
        <Table />
        <Pagination /> 
         
        </div>
        </div>
        </div>
       
     
    )
};
export default ProductList;