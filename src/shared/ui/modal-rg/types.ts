export interface ModalProps {
  width?: number | string;
  active: boolean;
  children?: JSX.Element[] | JSX.Element;
  handleClose: () => void;
}


