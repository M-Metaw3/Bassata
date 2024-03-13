import React from 'react';
import ProfileDetails from './ProfileDetails';
import Section1Profile from './Section1Profile';
import { Box } from '@chakra-ui/react';
import MyrequestsProfile from './MyrequestsProfile';
import Mydata from './Mydata';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
const Profile = ({islogin,isjwt}) => {
    console.log(islogin)
    if (!islogin&&!isjwt) return<Navigate to={'/login'} />
    return (
        <div>
            <Section1Profile/>
            <ProfileDetails/>
            <Box margin={"auto"} w={'60%'} >
            <Box>
            <Outlet/>
            </Box>
            </Box>
        </div>
    );
}

export default Profile;
