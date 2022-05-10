import React from "react";

import Navbar from "components/Navbar.js";
import Sidebar from "components/Sidebar.js";
import { Component } from "react/cjs/react.production.min";
 
class Dashboard extends Component {
  State = {
    BusinessName:'endibo trading',
    BussinesEmail:'endibo@gmail.com',
    Telephone:'0994926782',
    City:'adama',
    Address1:'addx',
    Address2:'addx2',
    TinNumber:'0XXX4',
    CompanySize:'microfinance',
    Supplier:'yes',
    RepresentativeName:'Surafel Muluye',
    RepresentativeEmail:'sura@gmail.com',
    RepresentativePosition:'General Manager',
    RepresentativePhoneNumber:'09XXXXX',
    Status:'Active',
    AccountType:'Supplier',
    Description:'Endibo Trading is one of ethiopias largest trading cartels which operates in western ethiopia.',
    Certificate:'ISO',
    CertificateDate:'june 10,2020'

  }
  render(){
    return(
    <div>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div class="bg-gray-100">
        <div class="container mx-auto my-5 p-5">
          <div class="no-wrap md:-mx-2 md:flex">
            {/* <!-- Left Side --> */}
            <div class="w-full md:mx-2 md:w-3/12">
              {/* <!-- Profile Card --> */}
              <div class="border-t-4 border-green-400 bg-white p-3">
                <div class="image overflow-hidden">
                  <img class="mx-auto h-auto w-full" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="" />
                </div>
                <h1 class="my-1 text-xl font-bold leading-8 text-gray-900">{this.State.RepresentativeName}</h1>
                <h3 class="font-lg text-semibold leading-6 text-gray-600">{this.State.RepresentativePosition}</h3>
                <p class="text-sm leading-6 text-gray-500 hover:text-gray-600">
                 {this.State.Description}
                  </p>
                <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto"><span class="rounded bg-green-500 py-1 px-2 text-sm text-white">Active</span></span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">Nov 07, 2016</span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>AccountType</span>
                    <span class="ml-auto">{this.State.AccountType}</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div class="my-4"> Space for additional Content</div>
            </div>
            {/* <!-- Right Side --> */}
            <div class="mx-4 h-64 w-full md:w-9/12">
              {/* <!-- Profile tab -->
              <!-- About Section --> */}
              <div class="rounded-sm bg-white p-4 shadow-sm">
               
                <div class="text-gray-700 ">
                  <div class="grid text-sm lg:grid-cols-2">
                    <div className="flex">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Business Name</div>
                      <div class="px-4 py-2">{this.State.BusinessName}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Business Email</div>
                      <div class="px-4 py-2">{this.State.BussinesEmail}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Telephone</div>
                      <div class="px-4 py-2">{this.State.Telephone}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">City</div>
                      <div class="px-4 py-2">{this.State.City}</div>
                    </div>
                    </div>

                    <div className="flex py-5">


                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">{this.State.Address1}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Permanant Address</div>
                      <div class="px-4 py-2">{this.State.Address2}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">TinNumber</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">{this.State.TinNumber}</a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">CompanySize</div>
                      <div class="px-4 py-2">{this.State.CompanySize}</div>
                    </div>
                    </div>
                  </div>
                </div>
                <button class="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">Show Full Information</button>
              </div>
              {/* <!-- End of about section --> */}

              <div class="my-4"></div>
               {/* 
              <!-- Experience and education --> */}
              <div class="rounded-sm bg-white p-3 shadow-sm">
                <div class="grid grid-cols-2">
                  <div>
                    <div class="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                      <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      <span class="tracking-wide">Products</span>
                    </div>
                    
                  </div>
                  <div className="2x-10 relative overflow-x-auto shadow-md sm:rounded-lg">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                       
           
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
                      
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        
                        
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
                       
                        </tr>
                        </tbody>
                        </table>
                      </div>



                      <div class="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900 py-4">
                      <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      <span class="tracking-wide">Certificates</span>
                    </div>
                      <div className="2x-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                      <div class="grid grid-cols-2">
                       
                        <div class="px-4 py-2 font-semibold"><a href="#">{this.State.Certificate}</a></div>
                        <div class="px-4 py-2">{this.State.CertificateDate}</div>
                      </div>
                   
                      </div>
                 
                </div>
                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
        </div>
      
      </div>
    </div>
    )
};

}
export default Dashboard;