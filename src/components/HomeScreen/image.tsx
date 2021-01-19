import React, { ReactElement } from "react";

// Styled-components
import { ImageResonsive } from "./styles";

// Others
import { IImage } from "./types";

const Image: React.FunctionComponent<IImage> = ({ src, alt }: IImage) => {
    return <ImageResonsive src={src} alt={alt} />;
};

export default Image;
