
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../shared/UserCard';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, WrapItem } from '@chakra-ui/react';

const GetUserFromApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await axios.post(
          'http://102.69.150.7:9002/api/auth/login?username=webportal&password=BASATA_webportal@MMF',
          {
            username: 'webportal',
            password: 'BASATA_webportal@MMF',
          }
        );
        const { access, refresh } = loginResponse.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        console.log(access)
      } catch (error) {
        console.error('Login error:', error);
      }
    };

    fetchData();
  }, []);

  const handleRefreshToken = async () => {
    try {
      const response = await axios.post('http://102.69.150.7:9002/api/auth/refresh', {
        refresh: refreshToken,
      });
      const newAccessToken = response.data.access_token;
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('Refresh token error:', error);
    }
  };

  const generateOtp = async () => {
    if (phoneNumber.length < 10) {
        return alert('Please enter a valid phone number');
    }
    
    try {
        const randomOtp = Math.floor(10000 + Math.random() * 90000);
        console.log(randomOtp)
        setLoading(true);
    //   const response = await axios.get(
    //     `https://nx-staging.basatapay.com:42831/cgi-bin/sendsms?username=mmf&password=1Qet4G2fyR&from=Basata&coding=2&charset=UTF-8&to=${phoneNumber}&text=${randomOtp}`
    //     );
    //     console.log(response)
        setOtp(randomOtp.toString());
        setOtp('55493');

    //   if (response.status === 202) {
    //     setError('');
    //   } else {
      
    //   }
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      if (verificationCode === otp) {
        if (!accessToken) {
          console.error('Access token is missing!');
          return;
        }
        const response = await axios.post(
          `http://102.69.150.7:9002/api/Customers/GetMMFCustomerData?mobileNumber=${phoneNumber}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserData(response.data);
        setOtp('');

        setError('');
      } else {
        setError('Invalid OTP. Please enter the correct OTP.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        await handleRefreshToken();
        await verifyOtp();
      }
      setError('Failed to fetch user data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateCustomer = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://102.69.150.7:9002/api/Customers/UpdateMMFCustomer`, {
        mobilePhone: phoneNumber,
        status: 1,
        contractUrl: 'https://metawea.com/contract.jpg',
      });
      console.log('Customer updated:', response.data);
      setError('');
    } catch (error) {
      setError('Failed to update customer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="max-w-xl mx-auto p-4">
<Box mt={'20px'} >
      <h2 className="text-2xl font-bold mb-4">Enter Customer Phone Number </h2>
      <FormControl>
  <FormLabel>Phone Number : </FormLabel>
  <Input   value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} placeholder='01008541445' type='email' />
  <FormHelperText>We'll never share your Phone Number.</FormHelperText>
  <WrapItem>
      <Button 
      isLoading={loading}
           onClick={generateOtp}
           mt={'10px'} w={'full'} colorScheme='red'>Search</Button>
    </WrapItem>
    {/* isDisabled={loading || !phoneNumber.trim()} */}
</FormControl>
</Box>
      {/* <div className="mt-4">
        <label htmlFor="phoneNumber">Enter Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded-md py-2 px-3 mt-2"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
          onClick={generateOtp}
          disabled={loading || !phoneNumber.trim()}
        >
          {loading ? 'Generating OTP...' : 'Generate OTP'}
        </button>
      </div> */}
      {otp && (
        <div className="mt-4">
          <label htmlFor="verificationCode">Enter OTP:</label>
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="border rounded-md py-2 px-3 mt-2"
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mt-2"
            onClick={verifyOtp}
            disabled={loading || !verificationCode.trim()}
          >
            {loading ? 'Verifying OTP...' : 'Verify OTP'}
          </button>
        </div>
      )}

      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
          {userData && (
            <>
            <UserCard userData={userData} />
            
            </>
    
    
    
          )}
          </>
  );
};

export default GetUserFromApp;