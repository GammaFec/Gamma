import styled from "styled-components";
import { ReactComponent as userAvatar } from "../../assets/img/user_avatar.svg";
import { colors, fontSizes, theme } from "../../common/styles";

export const StyledMessageContainer = styled.div`
    font-family: ${theme.fontPrimary};

    padding-top: 20px;
    padding-bottom: 20px;

    display: flex;
    gap: 8px;

    border-top: 1px solid ${colors.mercury};

    cursor: pointer;
`;

export const StyledDefaultAvatar = styled(userAvatar)`
    width: 50px;
    height: 50px;
`;

export const StyledUserAvatar = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 100%;
`;

export const StyledTextContainer = styled.div`
    gap: 2px;
`;

export const StyledName = styled.h1`
    margin: 0;
    color: ${colors.tundora};
    font-size: ${fontSizes.font14};
    font-weight: 600;
    line-height: 21px;
    margin-top: -2px;
`;

export const StyledMessageText = styled.p`
    color: ${colors.tundora};
    margin: 0;
    font-size: ${fontSizes.font12};
    line-height: 18px;

    width: 204px;
    height: 36px;
    text-overflow: ellipsis;
    overflow-x: hidden;
`;

export const StyledDetails = styled.div`
    margin-left: 7px;
    gap: 8px;
`;

export const StyledTimeAgo = styled.p`
    color: ${theme.colorSecondary};
    &.isRead {
        color: ${colors.gray};
    }

    font-size: ${fontSizes.font11};
    font-weight: 500;
    line-height: 16.5px;
    margin: 0;

    margin-top: -10px;
    margin-right: 7px;
    margin-bottom: 10px;
`;

export const StyledNumberOfMessage = styled.p`
    background-color: ${theme.colorSecondary};
    font-size: ${fontSizes.font12};
    font-weight: 600;
    line-height: 18.5px;
    color: ${theme.colorWhite};

    border-radius: 100%;
    margin: 0;

    display: flex;
    height: 24px;
    width: 24px;
    align-items: center;
    justify-content: center;

    margin-left: 7px;
`;
