'use client';

import { Grid } from '@mui/material';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';
import AnimationOnboarding from './animation/view';
import OnboardingForm from './form/form-view';

export default function OnboardingView() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Grid
      container
      gap={5}
      sx={{
        width: '100%',
        height: { lg: `calc(100vh - ${HEADER.H_DESKTOP - 70}px)` },
        alignItems: 'center',
        overflow: 'hidden',
        padding: {
          xs: `${HEADER.H_DESKTOP + 20}px 0px 0px 0px`,
          md: `${HEADER.H_DESKTOP + 25}px 0px 0px 0px`,
        },
      }}
    >
      {mdUp && (
        <Grid item xs={4}>
          <AnimationOnboarding />
        </Grid>
      )}
      <Grid item xs={mdUp ? 7 : 12}>
        <OnboardingForm />
      </Grid>
    </Grid>
  );
}
