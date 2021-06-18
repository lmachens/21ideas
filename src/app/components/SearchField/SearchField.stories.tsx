import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
};

export const search = (): JSX.Element => (
  <SearchField placeholder="Search meals" onChange={console.log} />
);
