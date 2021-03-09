import React, { useState } from "react";
import ProfileRole from "./ProfileRole";
import { StyledButton, StyledProfileRoleContainer } from "./styles";
import rolesData from "./rolesData.json";
import { IRoleData, ISelectedRol } from "./types";

const ProfileRoleContainer: React.FC = (): JSX.Element => {
    const Data: IRoleData[] = rolesData;
    const [Selected, setSelected] = useState<ISelectedRol | null>(null);
    const [ButtonDisabled, setButtonDisabled] = useState(true);

    const handleClick = (id: string, path: string): void => {
        if (id === Selected?.id) {
            setSelected(null);
            setButtonDisabled(true);
        } else {
            setSelected({ id, path });
            setButtonDisabled(false);
        }
    };

    return (
        <>
            <StyledProfileRoleContainer>
                {Data.map(({ id, path, variant, name }, i) => (
                    <ProfileRole
                        handleClick={(): void => handleClick(id, path)}
                        key={i}
                        selected={Selected?.id === id}
                        variant={variant}>
                        <p>{name}</p>
                    </ProfileRole>
                ))}
            </StyledProfileRoleContainer>
            <StyledButton
                className={`${ButtonDisabled && "disabled"}`}
                disabled={ButtonDisabled}
                variant="primary">
                Continuar
            </StyledButton>
        </>
    );
};

export default ProfileRoleContainer;
