import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Link, Typography, Box } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import SkillItems from './skill-items';
import { linkOptions } from '../../shared/link-options';

const ProjectCard = ({ title, description, note, skills, cover, git, deploy }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 256 }}
        image={cover}
        title={title}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography fontSize={20} fontWeight={700}>
          {title}
        </Typography>
        <Typography sx={{ height: 72 }}>
          {description}
        </Typography>
        <Typography sx={{ height: 48 }}>
          {note}
        </Typography>
        <Box sx={{ height: 88 }}>
          <SkillItems skills={skills} />
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, alignItems: "center", justifyContent: "space-between" }}>
        <Link
          href={git} {...linkOptions}
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        >
          Code on GitHub
          <OpenInNewOutlinedIcon sx={{ height: 18, width: 18 }} />
        </Link>
        <Link
          href={deploy} {...linkOptions}
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        >
          Live demo
          <OpenInNewOutlinedIcon sx={{ height: 18, width: 18 }} />
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;