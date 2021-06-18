export interface IInput {
    type: "text" | "radio" | "checkbox" | "password" | "email" | "date" | "number";
    name: string;
    id: string;
    value?: string;
    ref?: React.RefObject<HTMLInputElement>;
    icon?: string;
    iconPositionLeft?: boolean;
    alt?: string;
    placeholder?: string;
    minlength?: string;
    maxlength?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    doFocus?: boolean;
    autocomplete?: string;
}
