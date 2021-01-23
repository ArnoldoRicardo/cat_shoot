import React from 'react';
import { PhotoCard } from '../PhotoCard';

import { photos } from '../../../api/db.json';

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {photos.map((photoCard) => (
        <PhotoCard key={photoCard.id} {...photoCard} />
      ))}
    </ul>
  );
};
