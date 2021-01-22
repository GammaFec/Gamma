import React, { ReactElement } from "react";

// Others
import { IParagraph } from "./types";

const Paragraph = ({ text }: IParagraph): ReactElement => <p>{text}</p>;
export default Paragraph;
