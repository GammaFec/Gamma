import React from "react";

// Styled-components
import { StyledImageResponsive } from "./styles";

// Others
import { IImage } from "./types";

const Image: React.FC<IImage> = ({ src, alt }: IImage) => {
    return <StyledImageResponsive alt={alt} src={src} />;
};

export default Image;
