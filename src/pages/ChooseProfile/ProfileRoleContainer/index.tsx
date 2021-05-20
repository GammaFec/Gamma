import React, { useState } from "react";
import ProfileRole from "./ProfileRole";
import { StyledButton, StyledProfileRoleContainer } from "./styles";
import { ISelectedRol, IProfileRoleContainer } from "./types";
import { useTranslation } from "react-i18next";

const ProfileRoleContainer: React.FC<IProfileRoleContainer> = ({
    Data,
    handleSubmit
}: IProfileRoleContainer): JSX.Element => {
    const [selected, setSelected] = useState<ISelectedRol | null>(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const { t } = useTranslation("ProfileRole");

    const handleClick = (id: string, path: string): void => {
        if (id === selected?.id) {
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
                        selected={selected?.id === id}
                        variant={variant}>
                        <p>{name}</p>
                    </ProfileRole>
                ))}
            </StyledProfileRoleContainer>
            <StyledButton
                className={`${buttonDisabled && "disabled"}`}
                disabled={buttonDisabled}
                handleClick={(): void => handleSubmit(selected?.path)}
                variant="primary">
                {t("continue")}
            </StyledButton>
        </>
    );
};

export default ProfileRoleContainer;
