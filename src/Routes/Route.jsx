import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
  // import HomePage from "../pages/Home/HomePage";

import Layout from './Layout';


// import SercivcesDeteails from '../pages/services/servicesdetails/SercivcesDeteails';



// import DashboardAppBar from './../dashboard/DashboardAppBar';
import Login from './../pages/RegitrationLogin/Registration';
import Addadmin from './../pages/RegitrationLogin/Login';



import Cookies from 'js-cookie';
import Addrole from './../pages/addroles/Addrole';
import AdminView from './../pages/addadmin/Addadmin';
import Viewadmin from './../pages/addadmin/Viewadmin';
import Test from '../pages/Test';
import Dashboard from '../pages/dashboard/Ploty';
import Customer from '../pages/customer/Customer';
import MMF from '../pages/mmf/MMF';
import Admins from '../pages/admins/Admins';
import Branches from '../pages/branches/Branches';
import Reports from './../pages/reports/Reports';
import Updateadmins from './../pages/admins/Updateadmins';
import UpdateCustomer from './../pages/customer/UpdateCustomer';
import AddnewCustomer from '../pages/customer/AddnewCustomer';
import Addnewbassta from '../pages/customer/Addnewbassta';
import Reports2 from './../pages/reports/Reports2';
import AddTransaction from '../pages/transaction/AddTransaction';
import GetUserFromApp from '../pages/transaction/GetUserFromApp';


const Routess = () => {
  const userCookieadmin = Cookies?.get('user');
  const useradmin = userCookieadmin ? JSON.parse(userCookieadmin) : undefined;
  // const jwtCookie = Cookies?.get('user');
  // const jwt = jwtCookie ? JSON.parse(jwtCookie) : undefined;











    return ( 
      
                     <Routes >
   <Route path='/test' element={< Test/>}/>
   <Route path='/layout' element={<Layout />}>
    
   <Route  path='/layout/roles' element={<Addrole />}/>
   <Route path='/layout/addadmin' element={<AdminView />}/>
   <Route index element={<Reports />}/>
   <Route path='/layout/customer' element={<Customer user={useradmin} />}/>
   <Route path='/layout/mmf' element={<MMF user={useradmin}/>}/>
   <Route path='/layout/admins' element={<Admins user={useradmin} />}>
   </Route>

   <Route path='/layout/reports' element={<Reports />}/>
   <Route path='/layout/report' element={<Reports2 />}/>


   <Route path='/layout/branches' element={<Branches user={useradmin}/>}/>


   <Route path='/layout/transaction' element={<AddTransaction user={useradmin}/>}/>

   



   <Route path='/layout/add' element={< Addadmin/>}/>
   <Route path='/layout/viewadmns' element={< Viewadmin/>}/>
   <Route path='/layout/B' element={< Addnewbassta/>}/>
   <Route path='/layout/verifyusers' element={< GetUserFromApp/>}/>






   
   
   <Route path='/layout/customer/:id' element={<UpdateCustomer user={useradmin} />}/>





   <Route path='/layout/admins/:id' element={<Updateadmins user={useradmin} />}/>



   </Route>
   <Route path='/' element={<Login />}/>



    </Routes>
        
    );
}

export default Routess;
