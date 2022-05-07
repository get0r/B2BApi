import React from "react";

let Table = function(){
    return(

<div className="2x-10 relative overflow-x-auto shadow-md sm:rounded-lg">

<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" className="p-4">
<div className="flex items-center">
<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
<label for="checkbox-all-search" className="sr-only">checkbox</label>
</div>
</th>
<th>Product Image</th>
<th scope="col" className="px-6 py-3">
Product name
</th>
<th scope="col" className="px-6 py-3">
Color
</th>
<th scope="col" className="px-6 py-3">
Category
</th>
<th scope="col" className="px-6 py-3">
Price
</th>
<th scope="col" className="px-6 py-3">
<span className="sr-only">Edit</span>
</th>
</tr>
</thead>
<tbody>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<td className="w-4 p-4">
<div className="flex items-center">
<input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
<label for="checkbox-table-search-1" className="sr-only">checkbox</label>

</div>
</td>
<th><img  className="h-15 w-15 py-3"src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></th>
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
Apple MacBook Pro 17"
</th>
<td className="px-6 py-4">
Sliver
</td>
<td className="px-6 py-4">
Laptop
</td>
<td className="px-6 py-4">
$2999
</td>
<td className="px-6 py-4 text-right">
<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
<a href="#" className="px-2 font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<td className="w-4 p-4">
<div className="flex items-center">
<input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
<label for="checkbox-table-search-2" className="sr-only">checkbox</label>
</div>
</td>
<th><img  className="h-15 w-15 py-3"src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></th>
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
Microsoft Surface Pro
</th>
<td className="px-6 py-4">
White
</td>
<td className="px-6 py-4">
Laptop PC
</td>
<td className="px-6 py-4">
$1999
</td>
<td className="px-6 py-4 text-right">
<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
<a href="#" className="px-2 font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
</td>
</tr>
<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
<td className="w-4 p-4">
<div className="flex items-center">
<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-black-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

</div>
</td>
<th><img  className="h-15 w-15 py-3"src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></th>
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
Magic Mouse 2
</th>
<td className="px-6 py-4">
Black
</td>
<td className="px-6 py-4">
Accessories
</td>
<td className="px-6 py-4">
$99
</td>
<td className="px-6 py-4 text-right">
<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
<a href="#" className="px-2 font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
</td>
</tr>
</tbody>
</table>
</div>

    )
};
export default Table;
