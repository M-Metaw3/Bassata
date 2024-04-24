// useOtpGenerator.js

import { useState } from 'react';
import  axios  from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {openmodalcustomer } from '../store/slice/customer'

const useOtpGenerator = () => {
  const [loaading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch()

  const generateOtp = async (phoneNumber) => {
    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    // const randomOtp = Math.floor(10000 + Math.random() * 90000);

    try {
      
      setLoading(true);
      
      // const response = await axios.get(
        //     `https://nx-staging.basatapay.com:42831/cgi-bin/sendsms?username=mmf&password=1Qet4G2fyR&from=Basata&coding=2&charset=UTF-8&to=${phoneNumber}&text=${randomOtp}`
        //     );
        //     console.log(response)
        //     setOtp(randomOtp.toString());
        setOtp('55493');
        setTimeout(()=>{


setLoading(false)

          dispatch(openmodalcustomer(true))
        },3000)
          // if (response.status === 202) {
          //   setError('');
          // } else {
          
          // }

    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      // setLoading(false);
    }
  };

  return { loaading, error, otp, generateOtp };
};

export default useOtpGenerator;
