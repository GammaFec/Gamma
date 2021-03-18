import React from "react";
import {
    StyledMessageContainer,
    StyledMessageText,
    StyledTextContainer,
    StyledName,
    StyledUserAvatar,
    StyledDetails,
    StyledTimeAgo,
    StyledNumberOfMessage
} from "./styles";

import { IMessage } from "./types";

const Message: React.FC<IMessage> = ({
    name,
    text,
    timeAgo,
    NumberOfMessage,
    isRead
}: IMessage): JSX.Element => {
    return (
        <StyledMessageContainer>
            <StyledUserAvatar />
            <StyledTextContainer>
                <StyledName>{name}</StyledName>
                <StyledMessageText>{text}</StyledMessageText>
            </StyledTextContainer>
            <StyledDetails>
                <StyledTimeAgo className={`${isRead && "isRead"}`}>{timeAgo}</StyledTimeAgo>
                {!isRead && <StyledNumberOfMessage>{NumberOfMessage}</StyledNumberOfMessage>}
            </StyledDetails>
        </StyledMessageContainer>
    );
};

export default Message;
