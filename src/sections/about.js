import React from 'react';
import { Box, Stack, Link, Typography } from '@mui/material';

import aboutData from '../data/about-data';

const optionsLink = {
  target: "_blank",
  rel: "noopener",
  underline: "hover",
  color: "link.color"
}

const About = () => {
  const { fullName, position, description, photo, place, links } = aboutData;

  return (
    <Box component="section" className="container" pt={20} id="about">
      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems={{ md: "flex-start", xs: "center" }}
        flexWrap="wrap"
      >
        <Box>
          <img src={photo} alt="avatar" width={200} />
        </Box>
        <Stack
          textAlign={{ md: "left", xs: "center" }}
          mx={{ md: 3, sm: 0 }} my={{ md: 0, xs: 3 }}
        >
          <Typography color="text.secondary">
            {position}
          </Typography>
          <Typography fontWeight={700} fontSize={32}>
            {fullName}
          </Typography>
          <Typography sx={{ maxWidth: 410, mt: 2, textAlign: { md: "justify", xs: "center" } }}>
            {description}
          </Typography>
        </Stack>
        <Stack
          ml={{ md: "auto", sm: 0 }}
          textAlign={{ md: "left", xs: "center" }}
        >
          <Typography color="text.secondary" mb={3}>
            Located in {place.country}<br />{place.city}
          </Typography>
          <Link href={links.telegram} {...optionsLink}>
            Telegram
          </Link>
          <Link href={`mailto:${links.email}`} {...optionsLink}>
            Send email
          </Link>
          <Link href={links.github} {...optionsLink}>
            GitHub
          </Link>
          <Link href={links.codewars} {...optionsLink}>
            Codewars
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default About;