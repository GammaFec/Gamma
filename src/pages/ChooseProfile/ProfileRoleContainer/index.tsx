import React, { useState } from "react";
import ProfileRole from "./ProfileRole";
import { StyledButton, StyledProfileRoleContainer } from "./styles";
import rolesData from "./rolesData.json";
import { IRoleData, ISelectedRol } from "./types";

const ProfileRoleContainer: React.FC = (): JSX.Element => {
    const Data: IRoleData[] = rolesData;
    const [Selected, setSelected] = useState<ISelectedRol | null>(null);
    const [BotonDisabled, setBotonDisabled] = useState(true);

    const handleClick = (id: string, path: string): void => {
        if (id === Selected?.id) {
            setSelected(null);
            setBotonDisabled(true);
        } else {
            setSelected({ id, path });
            setBotonDisabled(false);
        }
    };

    return (
        <>
            <StyledProfileRoleContainer>
                {Data.map(({ id, path, variant, name }, i) => (
                    <ProfileRole
                        id={id}
                        key={i}
                        onClick={() => handleClick(id, path)}
                        selected={Selected?.id || null}
                        variant={variant}>
                        <p>{name}</p>
                    </ProfileRole>
                ))}
            </StyledProfileRoleContainer>
            <StyledButton
                className={`${BotonDisabled && "disabled"}`}
                disabled={BotonDisabled}
                onClick={() => console.log(Selected)}
                variant="primary">
                Continuar
            </StyledButton>
        </>
    );
};

export default ProfileRoleContainer;
