import MuiModal, { ModalProps } from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

const StyledModal = styled(MuiModal)({
  borderRadius: "22px",
});

const Modal = ({ open, onClose, children }: ModalProps) => (
  <StyledModal open={open} onClose={onClose}>
    {children}
  </StyledModal>
);

export default Modal;
