import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

type DatePickerProps = {
  label: string;
  value: Dayjs | null;
  setValue: (params: Dayjs | null) => void;
};

const DatePicker = ({ label, value, setValue }: DatePickerProps) => {
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label={label}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          disablePast
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
