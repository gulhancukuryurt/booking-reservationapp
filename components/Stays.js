import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stay() {
  const apiKey = "19ec163aa6mshf3973b30cbdc838p126d67jsn8d89c65e27d4";
  const apiUrl = "hotels4.p.rapidapi.com"
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('https://hotels4.p.rapidapi.com/locations/v3/search', {
        params: {
          q: 'new york',
          locale: 'en_US',
          langid: '1033',
          siteid: '300000001'
        },
        
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiUrl
        }
      });
      console.log(response.data);
      setHotels(response.data || []);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  useEffect(() => {
    fetchHotels(); 
  }, []);

  return (
    <div className="max-w-screen-xl px-2 py-5 mx-auto">
      <h3 className='font-bold text-2xl'>Kalacak mükemmel yeri mi arıyorsunuz?</h3>
      <p className='mt-2'>Benzer aramaları olan gezginler şu rezervasyonları yaptı:</p>

     
    </div>
  );
}

export default Stay;
