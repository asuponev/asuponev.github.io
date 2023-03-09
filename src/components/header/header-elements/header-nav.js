import React from 'react';
import { List, ListItem, Link, ListItemText } from '@mui/material';

export const Nav = () => {
  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Projects'];

  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <Link href={`#${item.toLowerCase()}`} color="primary" underline="hover">
            <ListItemText primary={item} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}