import { StoryObj } from '@storybook/react';
import { default as Modal } from './Modal';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Modal').ModalProps> & {
        ModalHeader: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        ModalTitle: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>>;
        ModalCloseButton: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLButtonElement>>>;
        ModalContent: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        ModalFooter: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>>>;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        isOpen: {
            control: "boolean";
            default: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onClick: {
            description: string;
        };
        style: {
            control: "object";
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        position: {
            control: {
                type: "radio";
            };
            options: string[];
            description: string;
        };
    };
    args: {
        onClick: import('@vitest/spy').Mock<[event: import('../../../node_modules/react').MouseEvent<HTMLElement, MouseEvent>], void>;
    };
    render: ({ style, ...args }: import('./Modal').ModalProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Modal>;
export declare const 기본: Story;
export declare const 제목이있는모달: Story;
export declare const 상단닫기버튼이있는모달: Story;
export declare const 하단닫기버튼이있는모달: Story;
