import { HTMLAttributes, CSSProperties, ButtonHTMLAttributes } from '../../../node_modules/react';

export interface ModalProps extends React.PropsWithChildren {
    children?: React.ReactNode;
    isOpen: boolean;
    position: "top" | "bottom" | "center";
    onClose: () => void;
    style?: CSSProperties;
}
declare const Modal: React.FC<ModalProps> & {
    ModalHeader: ModalHeaderType;
    ModalTitle: ModalTitleType;
    ModalCloseButton: ModalButtonType;
    ModalLongButton: ModalButtonType;
    ModalContent: ModalContentType;
    ModalFooter: ModalFooterType;
};
type ModalHeaderType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalTitleType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>;
type ModalButtonType = React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
type ModalContentType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;
export default Modal;
