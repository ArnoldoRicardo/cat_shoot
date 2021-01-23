import React from 'react';

import { ImgWrapper, Img, Button } from './styles';
import { AiFillHeart } from 'react-icons/ai';

const imagen =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = imagen }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <AiFillHeart size="32px" />
        {likes} likes!
      </Button>
    </article>
  );
};
