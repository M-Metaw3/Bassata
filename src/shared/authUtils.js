// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useAuth = () => {
//   const [accessToken, setAccessToken] = useState('');
//   const [refreshToken, setRefreshToken] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const loginResponse = await axios.post('http://102.69.150.7:9002/api/auth/login?username=webportal&password=BASATA_webportal@MMF', {
//           username: 'webportal',
//           password: 'BASATA_webportal@MMF',
//         });
//         const { access, refresh } = loginResponse.data;
//         setAccessToken(access);
//         setRefreshToken(refresh);
//       } catch (error) {
//         console.error('Login error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleRefreshToken = async () => {
//     try {
//       const response = await axios.post('http://102.69.150.7:9002/api/auth/refresh', {
//         refresh: refreshToken,
//       });
//       const newAccessToken = response.data.access_token;
//       setAccessToken(newAccessToken);
//     } catch (error) {
//       console.error('Refresh token error:', error);
//     }
//   };

//   return { accessToken, handleRefreshToken };
// };

// export default useAuth;


// authUtils.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const saveAccessTokenToCookie = (token) => {
  Cookies.set('access_token', token, { expires: 1 }); // Expires in 1 day
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get('access_token');
};

export const refreshAccessToken = async (refreshToken) => {
  try {
    const formData = new FormData();
    formData.append('refresh', refreshToken);

    const response = await axios.post('http://102.69.150.7:9002/api/auth/refresh', formData);

    console.log(response);
    
    const newAccessToken = response.data.access;
    saveAccessTokenToCookie(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const getTokens = async () => {
  try {
    const loginResponse = await axios.post(
      'http://102.69.150.7:9002/api/auth/login?username=webportal&password=BASATA_webportal@MMF'
    );
    console.log(loginResponse)
    return {
      accessToken: loginResponse.data.access,
      refreshToken: loginResponse.data.refresh,
    };
  } catch (error) {
    console.error('Error fetching tokens:', error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const makeApiRequest = async (accessToken) => {
  try {
    const apiResponse = await axios.get('http://your-api-endpoint-here', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log('API response:', apiResponse.data);
    return apiResponse.data;
  } catch (error) {
    console.error('Error making API request:', error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

