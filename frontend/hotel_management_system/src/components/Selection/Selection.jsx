import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ControlledOpenSelect() {
  const [guests, setGuests] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGuests(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}