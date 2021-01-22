import React, { ReactElement } from "react";

// Others
import { ITitle } from "./types";

const Title = ({ title }: ITitle): ReactElement => <h1>{title}</h1>;
export default Title;
