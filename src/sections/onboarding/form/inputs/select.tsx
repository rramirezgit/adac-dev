import { Autocomplete, TextField, Typography } from '@mui/material';
import { useField } from 'formik';

interface OnBoardingSelectProps {
  nameFORMIK: string;
  placeholder?: string;
  options?: any;
}

export default function OnBoardingSelect({
  nameFORMIK,
  placeholder,
  options,
}: OnBoardingSelectProps) {
  const [field, , helper] = useField(nameFORMIK);

  /// use efect depedinedo del nameFORMIK hacer un fetch para traer los datos de la base de datos

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
      <Autocomplete
        fullWidth
        options={options}
        disablePortal
        id="combo-box-demo"
        renderInput={(params) => <TextField name={nameFORMIK} {...params} variant="filled" />}
        onChange={(e, value) => {
          helper.setValue(value);
        }}
        value={field.value}
      />
    </>
  );
}
