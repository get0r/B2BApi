import React from "react";

// function imageGallery() {
//     return {
//       images: [],
//       api_key : "15819227-ef2d84d1681b9442aaa9755b8",
//       q: "",
//       image_type: "",
//       page: "",
//       per_page: 52,
//       getImages: async function() {
//         console.log("params", this.q, this.image_type);  
//         const response = await fetch(
//           `https://pixabay.com/api/?key=${this.api_key}&q=${
//             this.q
//           }&image_type=${this.image_type}&per_page=${this.per_page}&page=${this.page}`
//         );
//         const data = await response.json();
//         this.images = data.hits;
//       }
//     };
//   }
let ProductSearch = function(){
    return(
        // <!-- image search box -->
        <div class="box pt-6">
            <div class="box-wrapper">

                <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                  <button  class="outline-none focus:outline-none" ><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                  <input type="search" name="" id="" placeholder="search for Products" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                  <div class="select">
                    <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                      <option value="all" selected>All</option>
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                      <option value="category 3">Category 3</option>
                     </select>
                  </div>
                </div>
              
            </div>
        </div>
    )
};
export default ProductSearch;