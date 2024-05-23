import { TextField, Typography } from '@mui/material';
import { useField } from 'formik';

interface OnBoardingInputNumber {
  nameFORMIK: string;
  placeholder?: string;
}

export default function InputNumber({ nameFORMIK, placeholder }: OnBoardingInputNumber) {
  const [field, , helpers] = useField(nameFORMIK);
  return (
    <>
      <Typography
        sx={{
          mt: 2,
          mb: 1,
        }}
      >
        {placeholder}
      </Typography>
      <TextField
        variant="filled"
        type="number"
        sx={{
          '& .MuiFilledInput-input': {
            padding: '20px 14px',
          },
        }}
        value={field.value}
        onChange={(e) => {
          if (e.target.value.length > 2) {
            return;
          }
          helpers.setValue(e.target.value);
        }}
      />
    </>
  );
}
