import React from 'react';
import { Anchor, Image } from './styles';

export const Category = ({ cover, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
