import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import MUIButton, { ButtonProps } from "@mui/material/Button";
import { MouseEvent } from "react";

interface BtnProps extends ButtonProps {
  loading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const StyledBtn = styled(MUIButton)<BtnProps>({
  height: "45px",
  borderRadius: "8px",
  width: "100%",
});

const Button = ({
  variant = "contained",
  title,
  className,
  loading,
  disabled,
  onClick,
  sx,
  ...rest
}: BtnProps) => (
  <StyledBtn
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    className={className}
    variant={variant || "contained"}
    onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
      !disabled && !loading && typeof onClick === "function" && onClick(e)
    }
    sx={{
      ...(variant === "contained" && {
        backgroundColor: loading || disabled ? "grey" : "primary.main",
      }),
      ...(variant === "outlined" && {
        borderColor: loading || disabled ? "grey" : "primary.main",
        color: loading || disabled ? "grey" : "primary.main",
      }),
      ...sx,
    }}
    disableElevation={loading || disabled}
  >
    <>
      {title}
      {loading ? (
        <CircularProgress
          size={22}
          sx={{
            color: "primary.light",
            marginLeft: 2,
            position: "absolute",
            right: 18,
          }}
        />
      ) : null}
    </>
  </StyledBtn>
);

Button.defaultProps = {
  loading: false,
};

export default Button;
