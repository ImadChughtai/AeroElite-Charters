import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress, InputAdornment } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { searchAirport } from "../../../Apis/services";
import { devLog, transformAirportsLabel } from "../../../Utils/Helpers/index";

type OptionsProps = { label: string; id: number } | null;

interface LocationProps {
  label?: string;
  onChange: (params: OptionsProps) => void;
}

const LocationSelector = ({ label, onChange }: LocationProps) => {
  const timer = useRef<string | number | NodeJS.Timeout | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState<{ label: string; id: number }[]>([]);

  const clearTimer = () => {
    clearTimeout(timer.current);
  };

  const search = async (srchTxt = searchText) => {
    try {
      clearTimer();
      if (srchTxt.length < 3) return;
      setLoading(true);
      const { data } = await searchAirport(srchTxt);
      const transformedToOptions = transformAirportsLabel(data);
      if (transformedToOptions?.length) setOptions(transformedToOptions);
    } catch (e) {
      devLog.error(e);
    } finally {
      setLoading(false);
    }
  };

  const searchWithTimer = () => {
    timer.current = setTimeout(() => search(searchText), 800);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (searchText.length) searchWithTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: "100%" }}
      onChange={(e, val) => {
        if (val) onChange(val);
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label={label}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Select Airport"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {loading ? <CircularProgress size={24} /> : <LocationOn />}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
LocationSelector.defaultProps = {
  label: "Location",
};
export default LocationSelector;
