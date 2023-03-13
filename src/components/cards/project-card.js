import React from 'react';
import { Card, CardMedia, CardContent, Link, Typography, Stack } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const ProjectCard = ({ title, description, note, skills, cover, link }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 256 }}
        image={cover}
        title={title}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, height: 300 }}>
        <Typography fontWeight={700}>
          {title}
        </Typography>
        <Typography >
          {description}
        </Typography>
        <Typography >
          {note}
        </Typography>
        <Typography>
          {skills}
        </Typography>
        <Stack direction="row" mt="auto">
          <Link href={link} underline="hover">
            Code on GitHub
            <OpenInNewOutlinedIcon />
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;