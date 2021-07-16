import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import ProfileRole from "./ProfileRole";
import rolesData from "./rolesData";
import { StyledButton, StyledProfileRoleContainer } from "./styles";
import { IRoleData, ISelectedRol } from "./types";

const ProfileRoleContainer: React.FC = (): JSX.Element => {
    const Data: IRoleData[] = rolesData;
    const [selected, setSelected] = useState<ISelectedRol | null>(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const { t } = useTranslation("ProfileRole");
    const history = useHistory();

    const handleRoleClick = (id: string, path: string): void => {
        if (id === selected?.id) {
            setSelected(null);
            setButtonDisabled(true);
        } else {
            setSelected({ id, path });
            setButtonDisabled(false);
        }
    };

    const handleContinueClick = (): void => {
        if (selected) {
            const url = `/onboarding${selected.path}`;
            history.push(url);
        }
    };

    return (
        <>
            <StyledProfileRoleContainer>
                {Data.map(({ id, path, variant, name, image }, i) => (
                    <ProfileRole
                        handleClick={(): void => handleRoleClick(id, path)}
                        image={image}
                        key={i}
                        selected={selected?.id === id}
                        variant={variant}>
                        <p>{name}</p>
                    </ProfileRole>
                ))}
            </StyledProfileRoleContainer>
            <StyledButton
                className={`${buttonDisabled && "disabled"}`}
                disabled={buttonDisabled}
                handleClick={(): void => handleContinueClick()}
                variant="primary">
                {t("continue")}
            </StyledButton>
        </>
    );
};

export default ProfileRoleContainer;
