import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Create a custom theme for the DatePicker
const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#FFF", // Change primary color
    },
  },
});

// DatesPicker component for rendering a Material-UI date picker
export default function DatesPicker(props) {
  // Extract the 'label' prop for the DatePicker label
  const label = props.label;

  return (
    // Wrap the DatePicker with LocalizationProvider and ThemeProvider
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        {/* Material-UI DatePicker component */}
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
