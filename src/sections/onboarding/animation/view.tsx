'use client';

import { alpha, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'src/components/Box/box-component';
import Iconify from 'src/components/iconify/iconify';
import { RootState } from 'src/store';
import { setContentStep, setStep } from 'src/store/slices/onBoarding';
import { TSeccionForm } from '../form/types';

const degreesPerSection = 25;

export default function AnimationOnboarding() {
  const step = useSelector((state: RootState) => state.OnBoarding.step);
  const [rotation, setrotation] = useState(0);

  const theme = useTheme();

  const dispatch = useDispatch();

  const seccionesForm = Object.entries(TSeccionForm).map(([key, value]) => value);

  const rotateToSection = (index: number) => {
    dispatch(setContentStep(0));
    dispatch(setStep(index));
    setrotation(index * degreesPerSection);
  };

  useEffect(() => {
    setrotation(step * degreesPerSection);
  }, [step]);

  const getRotationDegree = (index: number) => {
    const activePositionDegree = -rotation;
    return activePositionDegree + degreesPerSection * index;
  };

  const Lines = (
    <Box
      sx={{
        position: 'absolute',
        width: '85vh',
        height: '85vh',
        transition: 'all 0.3s ease-in-out',
        top: '-45px',
        left: '-45px',
        zIndex: -10,
        backgroundImage: 'url(/assets/background/lineOnBoarding.svg)',
        backgroundSize: 'cover',
        animation: 'rotation 40s ease-in-out',
        animationIterationCount: 'infinite',
        '@keyframes rotation': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(-180deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      }}
    />
  );

  const arrow = (
    <Box
      sx={{
        position: 'absolute',
        transition: 'all 1s ease-in-out',
        width: '45px',
        height: '45px',
        right: '-15%',
        top: '49%',
        // animacion flotando
        animation: 'floating',
        '@keyframes floating': {
          '0%': {
            transform: 'translateX(0px)',
          },
          '50%': {
            transform: `translateX(-${7}px)`,
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationPlayState: 'running',
      }}
    >
      <Iconify
        icon="gravity-ui:triangle-left"
        color={theme.palette.primary.main}
        width={30}
        height={30}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        borderRadius: '50%',
        width: '75vh',
        height: '75vh',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.3s ease-in-out',
        left: '-60%',
      }}
    >
      {seccionesForm.map((name, index) => (
        <Box
          key={name}
          // onClick={() => rotateToSection(index)}
          sx={{
            color: step === index ? 'white' : 'primary.main',
            fontWeight: step === index ? 'bold' : 'normal',
            // cursor: 'pointer',
            textAlign: 'end',
            position: 'absolute',
            zIndex: 1,
            transition: 'all 0.3s ease-in-out',
            backgroundImage: step === index ? 'url(assets/background/onboarding.svg)' : 'none',
            backgroundSize: '36% 100%',

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            // backgroun radius
            borderRadius: '80px',
            padding: `10px ${name.length > 19 ? 12 : 22}px`,
            top: '50%',
            fontSize: 18,
            transform: `rotate(${getRotationDegree(index)}deg) translate(${
              (-index * 3) / 2
            }px, 0px)`,
            width: '95%',
            // '&:hover': {
            //   color: 'white',
            //   fontWeight: 'bold',
            // },
          }}
        >
          {name}
        </Box>
      ))}
      {Lines}
      {arrow}
    </Box>
  );
}
