import { FormEvent, ReactNode } from "react";

export default interface iForm {
    handleSubmit?: (event: FormEvent) => void;
    children: ReactNode;
    className?: string;
    isContentCentered?: boolean;
}
