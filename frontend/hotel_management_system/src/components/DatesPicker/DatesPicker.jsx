import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider, createTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#FFF', // Change primary color
    },
    // Add more customizations as needed
  },
});

export default function DatesPicker(props) {
  const label = props.label;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DatePicker
          label={label}
          format="DD/MM/YYYY"
          slotProps={{
            textField: {},
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
