import React from "react";
import {
    StyledMessageContainer,
    StyledMessageText,
    StyledTextContainer,
    StyledName,
    StyledDefaultAvatar,
    StyledDetails,
    StyledTimeAgo,
    StyledNumberOfMessage,
    StyledUserAvatar
} from "./styles";

import { IMessage } from "./types";
import { TimeAgo } from "./utils";

const Message: React.FC<IMessage> = ({
    name,
    text,
    creationDate,
    count,
    isRead,
    handleClick,
    profileIcon
}: IMessage): JSX.Element => {
    return (
        <StyledMessageContainer onClick={handleClick}>
            {profileIcon ? (
                <StyledUserAvatar alt={name} src={profileIcon} />
            ) : (
                <StyledDefaultAvatar />
            )}
            <StyledTextContainer>
                <StyledName>{name}</StyledName>
                <StyledMessageText>{text}</StyledMessageText>
            </StyledTextContainer>
            <StyledDetails>
                <StyledTimeAgo className={`${isRead && "isRead"}`}>
                    {TimeAgo(creationDate)}
                </StyledTimeAgo>
                {!isRead && <StyledNumberOfMessage>{count}</StyledNumberOfMessage>}
            </StyledDetails>
        </StyledMessageContainer>
    );
};

export default Message;
