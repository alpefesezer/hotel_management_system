import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatesPicker(props) {
  const label = props.label;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {},
        }}
      />
    </LocalizationProvider>
  );
}
