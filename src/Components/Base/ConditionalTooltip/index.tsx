import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

interface ConditionalTooltipProps extends TooltipProps {
  show: boolean;
}
const ConditionalTooltip = ({
  show,
  ...otherTooltipProps
}: ConditionalTooltipProps) =>
  (show || otherTooltipProps?.children || null) && (
    <Tooltip
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherTooltipProps}
    />
  );

export default ConditionalTooltip;
