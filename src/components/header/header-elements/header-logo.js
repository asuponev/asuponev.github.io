import React from 'react';
import { Link } from '@mui/material';

import logoUrl from '../../../assets/icons/logo.svg';

export const Logo = () => {
  return (
    <Link href="/">
      <img src={logoUrl} alt="logo" />
    </Link>
  );
}