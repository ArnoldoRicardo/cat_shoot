import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Category } from '../Category';

import { List, Item } from './styles';

// import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:8081/categories');
      setCategories(response.data);
    };
    getData();
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
