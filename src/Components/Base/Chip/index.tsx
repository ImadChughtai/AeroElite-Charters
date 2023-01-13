import Chip, { ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)(() => ({
  "& .MuiChip-root": {
    borderRadius: 0,
  },
}));

const SquareChip = (props: ChipProps) => (
  <StyledChip
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default SquareChip;
