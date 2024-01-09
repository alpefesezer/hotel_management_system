import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// A functional component named ControlledOpenSelect
export default function ControlledOpenSelect() {
  // State variables: guests (selected value from the dropdown) and open (dropdown open/close state)
  const [guests, setGuests] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // Event handler for changing the selected value
  const handleChange = (event) => {
    setGuests(event.target.value);
  };

  // Event handler for closing the dropdown
  const handleClose = () => {
    setOpen(false);
  };

  // Event handler for opening the dropdown
  const handleOpen = () => {
    setOpen(true);
  };

  // JSX structure rendering the Material-UI components
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="guests-select-label">Guests</InputLabel>
        <Select
          labelId="guests-select-label"
          id="guests-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={guests}
          label="Guests"
          onChange={handleChange}
        >
          {/* Menu items with different values */}
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
