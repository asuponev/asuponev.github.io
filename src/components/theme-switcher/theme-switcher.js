import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { handleChangeMode } from '../../store/action-creators/options';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(state => state.options);

  return (
    <Box className="container" sx={{ position: "sticky", top: "50%" }}>
      <Stack sx={{ background: "#192B45", borderRadius: 5, width: 50, height: 50, position: "absolute", right: 0 }}>
        <Tooltip
          title={
            mode === 'dark'
              ? 'Turn off Dark mode'
              : 'Turn on Dark mode'
          }
        >
          <IconButton
            onClick={() => dispatch(handleChangeMode(mode))}
            sx={{ color: "#FFFFFF", height: 50 }}
          >
            {
              mode === 'dark'
                ? <LightModeOutlinedIcon />
                : <DarkModeOutlinedIcon />
            }
          </IconButton>
        </Tooltip>
      </Stack >
    </Box>
  );
}

export default ThemeSwitcher;