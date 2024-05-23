'use client';

import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { HEADER } from 'src/layouts/config-layout';
import { RootState } from 'src/store';
import { useResponsive } from 'src/hooks/use-responsive';
import AnimationOnboarding from './animation/view';
import OnboardingForm from './form/form-view';
import WhatsAppView from './whatsApp-view/whatsApp';

export default function OnboardingView() {
  const showWhatsApp = useSelector((state: RootState) => state.OnBoarding.swhoWhatsApp);

  const mdUp = useResponsive('up', 'lg');

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
      {mdUp && !showWhatsApp && (
        <Grid item xs={4}>
          <AnimationOnboarding />
        </Grid>
      )}
      {mdUp && showWhatsApp && (
        <Grid item xs={4}>
          <WhatsAppView />
        </Grid>
      )}
      <Grid item xs={mdUp ? 7 : 12}>
        <OnboardingForm />
      </Grid>
    </Grid>
  );
}
