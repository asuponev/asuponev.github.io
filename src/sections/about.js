import React from 'react';
import { Box, Stack, Link, Typography } from '@mui/material';

import photoImg from '../assets/img/photo.png';

const About = () => {
  return (
    <Box component="section" className="container" pt={20} id="about">
      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems={{ md: "flex-start", sm: "center", xs: "center" }}
        flexWrap="wrap"
      >
        <Box>
          <img src={photoImg} alt="avatar" width={200} />
        </Box>
        <Stack
          textAlign={{ md: "left", sm: "center", xs: "center" }}
          mx={{ md: 3, sm: 0 }} my={{ md: 0, sm: 3, xs: 3 }}
        >
          <Typography color="text.secondary">
            Junior Front-End developer
          </Typography>
          <Typography fontWeight={700} fontSize={32}>
            Andrew Suponev
          </Typography>
          <Typography align="justify" maxWidth={410} mt={2}>
            Since childhood I loved to stay up late and create websites using basic HTML and CSS.
            But, unfortunately, after graduation, my life path and IT missed each other.
            Now I'm 28 years old, I dream be a web developer and contribute to society by doing what I love.
          </Typography>
        </Stack>
        <Stack
          ml={{ md: "auto", sm: 0 }}
          textAlign={{ md: "left", sm: "center", xs: "center" }}
        >
          <Typography color="text.secondary" mb={3}>
            Located in Georgia<br />Batumi
          </Typography>
          <Link href="https://t.me/andrewsupo" underline="hover" color="link.color">
            Telegram
          </Link>
          <Link href="mailto:andrew.suponev@gmail.com" underline="hover" color="link.color">
            Send email
          </Link>
          <Link href="https://github.com/elsuppo" underline="hover" color="link.color">
            GitHub
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default About;