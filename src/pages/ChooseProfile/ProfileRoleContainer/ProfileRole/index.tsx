import React, { useEffect, useState } from "react";
import { StyledProfileRole } from "./styles";
import { IProfileRole } from "./types";

const ProfileRole: React.FC<IProfileRole> = ({
    variant,
    onClick,
    selected,
    id,
    children
}: IProfileRole): JSX.Element => {
    const [Active, setActive] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick && onClick(e);
    };

    useEffect(() => {
        if (selected === id) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [selected]);
    return (
        <StyledProfileRole
            className={`${Active && "selected"}`}
            color={variant}
            onClick={handleClick}>
            {children}
        </StyledProfileRole>
    );
};

export default ProfileRole;
