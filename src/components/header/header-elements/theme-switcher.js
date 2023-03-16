import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Stack, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { handleChangeMode } from '../../../store/action-creators/options';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(state => state.options);

  return (
    <Stack className="header__theme-switcher" sx={{ backgroundColor: "background.card" }}>
      <Tooltip
        title={
          mode === 'dark'
            ? 'Turn off Dark mode'
            : 'Turn on Dark mode'
        }
      >
        <IconButton
          onClick={() => dispatch(handleChangeMode(mode))}
          sx={{ color: "primary.alt", height: 32 }}
        >
          {
            mode === 'dark'
              ? <LightModeOutlinedIcon />
              : <DarkModeOutlinedIcon />
          }
        </IconButton>
      </Tooltip>
    </Stack >
  );
}