import React from 'react';
import { Box, Stack, Link, Typography } from '@mui/material';

import aboutData from '../data/about-data';
import { linkOptions } from '../shared/link-options';

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
          <img src={photo} alt="avatar" width={200} height={200} style={{ borderRadius: 12 }} />
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
          <Link href={links.linkedin} {...linkOptions}>
            Linkedin
          </Link>
          <Link href={links.telegram} {...linkOptions}>
            Telegram
          </Link>
          <Link href={`mailto:${links.email}`} {...linkOptions}>
            Send email
          </Link>
          <Link href={links.github} {...linkOptions}>
            GitHub
          </Link>
          <Link href={links.codewars} {...linkOptions}>
            Codewars
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default About;