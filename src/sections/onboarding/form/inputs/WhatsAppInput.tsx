/* eslint-disable no-plusplus */
import { LoadingButton } from '@mui/lab';
import { Autocomplete, TextField, Typography, Button, InputAdornment } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from 'src/components/Box/box-component';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { RootState } from 'src/store';

interface Country {
  code: string;
  label: string;
  phone: string;
  mask: string;
}

const countries: Country[] = [
  { code: 'GB', label: 'United Kingdom', phone: '44', mask: '0000 000 0000' },
  { code: 'US', label: 'United States', phone: '1', mask: '(000) 000-0000' },
  { code: 'MX', label: 'Mexico', phone: '52', mask: '00 0000 0000' },
  { code: 'CA', label: 'Canada', phone: '1', mask: '(000) 000-0000' },
  { code: 'FR', label: 'France', phone: '33', mask: '0 00 00 00 00' },
  { code: 'DE', label: 'Germany', phone: '49', mask: '0000 0000000' },
  { code: 'IN', label: 'India', phone: '91', mask: '00000 00000' },
  { code: 'BR', label: 'Brazil', phone: '55', mask: '00 00000-0000' },
  { code: 'CN', label: 'China', phone: '86', mask: '0000 000 0000' },
  { code: 'JP', label: 'Japan', phone: '81', mask: '00-0000-0000' },
  { code: 'AU', label: 'Australia', phone: '61', mask: '0000 000 000' },
  { code: 'RU', label: 'Russia', phone: '7', mask: '000 000-00-00' },
];

interface WhatsAppRegisterProps {
  nameFORMIK: string;
  placeholder?: string;
}

export default function WhatsAppRegister({ nameFORMIK, placeholder }: WhatsAppRegisterProps) {
  const [field, , helper] = useField(nameFORMIK);
  const [valueTextField, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const showWhatsApp = useSelector((state: RootState) => state.OnBoarding.swhoWhatsApp);

  const smUp = useResponsive('down', 'lg');

  const applyMask = (value: string, mask: string): string => {
    let maskedValue = '';
    let valueIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '0') {
        if (valueIndex < value.length) {
          maskedValue += value[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else if (valueIndex < value.length) {
        maskedValue += mask[i];
      } else {
        break;
      }
    }

    return maskedValue;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueData = e.target.value.replace(/\D/g, '');
    const maskedValue = applyMask(valueData, selectedCountry.mask);
    const number = `+${selectedCountry.phone}${valueData}`;

    if (maskedValue.length === selectedCountry.mask.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    setValue(maskedValue);
    helper.setValue(number);
  };

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Autocomplete
          disableClearable
          options={countries}
          getOptionLabel={(option) => option.code}
          renderOption={(props, option) => (
            <li {...props} key={option.code}>
              <Iconify icon={`flagpack:${option.code.toLowerCase()}`} />
              <Typography sx={{ ml: 2 }}>{option.code}</Typography>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon={`flagpack:${selectedCountry?.code.toLowerCase()}`} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
          value={selectedCountry}
          onChange={(event, newValue) => {
            setSelectedCountry(newValue);
            setValue('');
            helper.setValue('');
          }}
          sx={{
            width: 150,
            mr: 2,
            '& .MuiOutlinedInput-root': {
              paddingRight: '17px !important',
            },
          }}
        />
        <TextField
          variant="outlined"
          type="tel"
          InputProps={{
            startAdornment: selectedCountry && (
              <Typography sx={{ mr: 1 }}>+{selectedCountry.phone}</Typography>
            ),
          }}
          sx={{ width: '100%' }}
          name={nameFORMIK}
          value={valueTextField}
          onChange={handlePhoneChange}
        />
      </Box>
      <Typography
        sx={{
          mt: 2,
          mb: 1,
          backgroundColor: '#f5f5f5',
          p: 2,
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="material-icons" style={{ marginRight: '8px' }}>
          <Iconify icon="material-symbols:info" color="#637381" />
        </span>
        Tus datos están seguros con nosotros. Registra tu número para recibir las últimas noticias
        personalizadas como mensaje.
      </Typography>
      <LoadingButton
        loading={false}
        variant="contained"
        sx={{ mt: 2, width: '100%', height: '48px' }}
        color="secondary"
        disabled={disabled}
      >
        Recibir vía WhatsApp
      </LoadingButton>
      <Button sx={{ mt: 1, width: '100%', color: '#00bcd4', height: '48px' }}>Omitir</Button>
      {showWhatsApp && smUp && (
        <Image
          src="/assets/images/onboarding/cel-mobile.svg"
          alt="whatsapp"
          sx={{ mt: 2, width: '100%' }}
        />
      )}
    </Box>
  );
}
