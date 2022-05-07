import React from "react";
import Sidebar from "./components/dashboard/Sidebar";
import ProductList from "./pages/dashboards/ProductList";
function App() {
  return (

    <div className="app">

<ProductList />
      </div>

  );
}

export default App;
{/**
 * </BrowserRouter>
      <Route exact path='/' component={()=>{Home}} />
      <Route path='/cart' component={()=>{Cart}} />
      <Route path='/productdetails' component={()=>{productDetails}} />
    <BrowserRouter>
    */}
