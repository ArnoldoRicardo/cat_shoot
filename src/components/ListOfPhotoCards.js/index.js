import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoCard } from '../PhotoCard';

// import { photos } from '../../../db.json';

export const ListOfPhotoCards = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:8081/photos');
      setPhotos(response.data);
    };
    getData();
  }, []);

  return (
    <ul>
      {photos.map((photoCard) => (
        <PhotoCard key={photoCard.id} {...photoCard} />
      ))}
    </ul>
  );
};
