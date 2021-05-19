import { FormEvent, ReactNode } from "react";

export default interface IForm {
    handleSubmit?: (event: FormEvent) => void;
    children: ReactNode;
    className?: string;
    isContentCentered?: boolean;
}
