'use client';

// @mui
/* eslint-disable import/order */
import { Box, Main } from 'src/components/Box/box-component';
// routes
import { usePathname } from 'src/routes/hooks';
//
// @mui
import { alpha, useTheme } from '@mui/material/styles';
/* eslint-disable import/order */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
// theme
// components
import Logo from 'src/components/logo';
//
import { HEADER } from '../config-layout';
//
import { HeaderShadow } from '../_common';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function OnBoardingLayout({ children }: Props) {
  const pathname = usePathname();
  const showWhatsApp = useSelector((state: RootState) => state.OnBoarding.swhoWhatsApp);

  const isHome = pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 1,
      }}
    >
      {!showWhatsApp && <Header />}

      <Main
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Main>
    </Box>
  );
}

function Header() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          padding: { xs: '50px 10px', lg: '0px 50px' },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          backgroundColor: alpha(theme.palette.background.paper, 0.99),
          ...(offsetTop && {
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
