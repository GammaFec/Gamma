export interface IInput {
    type: "text" | "radio" | "checkbox" | "password" | "email" | "date" | "number";
    name: string;
    id: string;
    icon?: string;
    alt?: string;
    placeholder?: string;
    minlength?: string;
    maxlength?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
