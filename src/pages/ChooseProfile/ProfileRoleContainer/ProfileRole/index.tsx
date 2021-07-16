import React from "react";

import { StyledProfileRole } from "./styles";
import { IProfileRole } from "./types";

const ProfileRole: React.FC<IProfileRole> = ({
    variant,
    handleClick,
    selected,
    children,
    image
}: IProfileRole): JSX.Element => (
    <StyledProfileRole
        className={`${selected && "selected"}`}
        color={variant}
        image={image}
        onClick={handleClick}>
        {children}
    </StyledProfileRole>
);

export default ProfileRole;
