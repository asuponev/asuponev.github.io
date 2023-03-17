import React, { useState } from 'react';
import { Card, CardContent, CardActions, Stack, Button, Typography } from '@mui/material';

import CertificateModal from '../modal/certificate-modal';

const InfoCard = ({ date, company, position, description, certificate }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ backgroundColor: "background.card" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">
            {date}
          </Typography>
          <Typography>
            {company}
          </Typography>
        </Stack>
        <Typography fontSize={20} fontWeight={700} minHeight={60}>
          {position}
        </Typography>
        <Typography minHeight={72}>
          {description}
        </Typography>
      </CardContent>
      {
        certificate ? (
          <CardActions sx={{ px: 2, pb: 2, pt: 0, alignItems: "center" }}>
            <Button onClick={handleOpen} disabled={certificate === "none" ? true : false}>
              {certificate === "none" ? <>In progress</> : <>Certificate</>}
            </Button>
            <CertificateModal open={open} handleClose={handleClose} certificate={certificate} />
          </CardActions>
        ) : null
      }
    </Card>
  );
}

export default InfoCard;