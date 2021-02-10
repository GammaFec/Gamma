import React, { ReactElement } from "react";

// Styled-components
import { StyledImageResponsive } from "./styles";

// Others
import { IImage } from "./types";

const Image: React.FunctionComponent<IImage> = ({ src, alt }: IImage) => {
    return <StyledImageResponsive src={src} alt={alt} />;
};

export default Image;
