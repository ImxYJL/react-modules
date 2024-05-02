import { HTMLAttributes, CSSProperties } from '../../../node_modules/react';

export interface ModalProps extends React.PropsWithChildren {
    children?: React.ReactNode;
    isOpen: boolean;
    position: "top" | "bottom" | "center";
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
declare const Modal: React.FC<ModalProps> & {
    ModalHeader: ModalHeaderType;
    ModalTitle: ModalTitleType;
    ModalCloseButton: ModalCloseButtonType;
    ModalContent: ModalContentType;
    ModalFooter: ModalFooterType;
};
type ModalHeaderType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalTitleType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>;
type ModalCloseButtonType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLButtonElement>>>;
type ModalContentType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;
export default Modal;
