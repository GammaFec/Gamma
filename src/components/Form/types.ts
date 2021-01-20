import { FormEvent, ReactNode } from "react";

export interface FormProps {
    handleSubmit?: (event: FormEvent) => void;
    children: ReactNode;
    className?: string;
    isContentCentered?: boolean;
}
