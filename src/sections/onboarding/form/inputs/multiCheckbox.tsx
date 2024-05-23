import { Checkbox, TextField } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/system';
import { useField } from 'formik';
import React, { useEffect, useState } from 'react';
import { Box } from 'src/components/Box/box-component';
import { palette } from '../../../../theme/palette';

type StyledCheckboxProps = {
  active?: boolean;
};

const StyledCheckbox = styled(Checkbox)<StyledCheckboxProps>(({ active, theme }) => ({
  color: active ? theme.palette.secondary.main : theme.palette.action.disabled,
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
}));

type Props = {
  nameFORMIK: string;
};

export default function OnBoardingMultiCheckbox({ nameFORMIK }: Props) {
  const [field, , helper] = useField(nameFORMIK);
  const [options, setOptions] = useState<any[]>([]);
  const [other, setOther] = useState('');
  const [optionsSelected, setOptionsSelected] = useState<any[]>(field.value || []);

  useEffect(() => {
    setOptions([
      { label: 'Seguir las últimas tendencias e innovaciones tecnológicas.', value: '1' },
      {
        label: 'Acceder a análisis profundos y perspectivas sobre emprendimiento y finanzas.',
        value: '2',
      },
      { label: 'Inspirarme con historias exitosas en startups y tecnología.', value: '3' },
      {
        label:
          'Acceder a contenido personalizado que ayuden a tomar decisiones estratégicas e informadas.',
        value: '4',
      },
      {
        label: 'Seguir desarrollándome en áreas específicas mediante secciones educativas.',
        value: '5',
      },
      {
        label: 'Informarme sobre movimientos del mercado financiero y oportunidades de inversión.',
        value: '6',
      },
      {
        label: 'Descubrir herramientas, consejos prácticos y recursos para mi desarrollo.',
        value: '7',
      },
      {
        label: 'Conectar con una comunidad de profesionales y entusiastas tecnológicos.',
        value: '8',
      },
    ]);
  }, []);

  const handleClickOption = (item: any) => {
    setOptionsSelected((prev) =>
      isSelected(item) ? prev.filter((p) => p.value !== item.value) : [...prev, item]
    );
    setOther('');
  };

  const isSelected = (item: any) => optionsSelected.some((i: any) => i.value === item.value);

  useEffect(() => {
    helper.setValue(optionsSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsSelected]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflowY: 'auto',
        maxHeight: { xs: 'none', md: 'clamp(300px, 60vh, 400px)' },
      }}
    >
      {options.map((item) => (
        <Box
          key={item.value}
          sx={(thme) => ({
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            gap: 2,
            borderRadius: '13px',
            padding: '8px 30px',
            background: isSelected(item)
              ? alpha(thme.palette.secondary.main, 0.16)
              : 'rgba(145, 158, 171, 0.16)',
          })}
          onClick={(e: any) => {
            e.preventDefault();
            handleClickOption(item);
          }}
        >
          <StyledCheckbox
            color="secondary"
            checked={isSelected(item)}
            onChange={() => handleClickOption(item)}
            active={isSelected(item)}
          />
          <Box>{item.label}</Box>
        </Box>
      ))}
      <TextField
        name={nameFORMIK}
        value={other}
        placeholder="Otros: ¿Qué otras cosas te motivó a suscribirte a ADAC? Escribe aquí"
        onChange={(e) => {
          const oterValue = { label: e.target.value, value: '9' };
          setOther(e.target.value);
          helper.setValue(oterValue);
          setOptionsSelected([]);
        }}
      />
    </Box>
  );
}
