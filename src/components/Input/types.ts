export interface IInput {
    type: "text" | "radio" | "checkbox" | "password" | "email" | "date" | "number";
    name: string;
    id: string;
    value?: string;
    ref?: React.RefObject<HTMLInputElement>;
    icon?: string;
    alt?: string;
    placeholder?: string;
    minlength?: string;
    maxlength?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
