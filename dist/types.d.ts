import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, SwitchProps as SwitchProps$1 } from '@mui/material';

interface ButtonProps extends ButtonProps$1 {
    bdType?: "primary" | "secondary" | "outlined" | "remove";
    icon?: JSX.Element;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    bdSize?: string;
    width?: string;
}

declare const SecondaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const OutlinedBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const RemoveBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const PrimaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

type Position = 'top' | 'right' | 'bottom' | 'left';
interface DrawerProps {
    open: boolean;
    title: string;
    text: string;
    corner?: string;
    position: Position;
    width?: string | number;
    onClose?: () => void;
    onClick?: () => void;
    onCorner?: () => void;
    children: React.ReactNode;
}

interface SideMenuProps {
    menus: any[];
    visible: boolean;
    username: string;
    role: string;
    version: string;
    onLogout?: () => void;
    onVisible: () => void;
}
declare const SideMenu: (props: SideMenuProps) => react_jsx_runtime.JSX.Element;

interface SwitchProps extends SwitchProps$1 {
    bdSize?: string;
}
declare const Switch: (props: SwitchProps) => react_jsx_runtime.JSX.Element;

declare const black = "#000000";
declare const white = "#FFFFFF";
declare const gray1 = "#F3F6F9";
declare const gray2 = "#EAEEF6";
declare const gray3 = "#C3CAD4";
declare const gray4 = "#939CA9";
declare const gray5 = "#4A5568";
declare const gray6 = "#323A43";
declare const gray7 = "#747B84";
declare const primary001 = "#1E6AF6";
declare const primary002 = "#4B88F8";
declare const primary003 = "#78A6FA";
declare const primary004 = "#A5C3FB";
declare const primary005 = "#E8F0FE";
declare const secondary001 = "#07236D";
declare const secondary002 = "#264189";
declare const secondary003 = "#455FA5";
declare const secondary004 = "#849CDD";
declare const secondary005 = "#A3BAF9";
declare const trinary001 = "#EE6E3A";
declare const trinary002 = "#F18B61";
declare const trinary003 = "#F5A889";
declare const trinary004 = "#F8C5B0";
declare const trinary005 = "#FAD3C4";

declare const Layout: (props: any) => react_jsx_runtime.JSX.Element;

export { Layout as AdminLayout, SecondaryBtn as Btn, type DrawerProps, OutlinedBtn, type Position, PrimaryBtn, RemoveBtn, SideMenu, Switch, black, gray1, gray2, gray3, gray4, gray5, gray6, gray7, primary001, primary002, primary003, primary004, primary005, secondary001, secondary002, secondary003, secondary004, secondary005, trinary001, trinary002, trinary003, trinary004, trinary005, white };
