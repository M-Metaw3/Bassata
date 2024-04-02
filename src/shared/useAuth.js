import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await axios.post('http://102.69.150.7:9002/api/auth/login?username=webportal&password=BASATA_webportal@MMF', {
          username: 'webportal',
          password: 'BASATA_webportal@MMF',
        });
        const { access, refresh } = loginResponse.data;
        setAccessToken(access);
        setRefreshToken(refresh);
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

  return { accessToken, handleRefreshToken };
};

export default useAuth;
