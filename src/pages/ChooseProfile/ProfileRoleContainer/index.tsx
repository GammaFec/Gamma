import React, { useState } from "react";
import ProfileRole from "./ProfileRole";
import { StyledButton, StyledProfileRoleContainer } from "./styles";
import rolesData from "./rolesData.json";
import { IRoleData, ISelectedRol } from "./types";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

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
                {Data.map(({ id, path, variant, name }, i) => (
                    <ProfileRole
                        handleClick={(): void => handleRoleClick(id, path)}
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
