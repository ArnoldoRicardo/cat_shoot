import React from 'react';
import { Anchor, Image } from './styles';
import imagen from '../../cat.jpg';

export const Category = ({ cover = imagen, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
