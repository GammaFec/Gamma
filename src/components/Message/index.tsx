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

const Message: React.FC<IMessage> = ({
    name,
    text,
    timeago,
    numberofmessage,
    isread,
    handleClick,
    src
}: IMessage): JSX.Element => {
    return (
        <StyledMessageContainer onClick={handleClick}>
            {src ? <StyledUserAvatar alt={name} src={src} /> : <StyledDefaultAvatar />}
            <StyledTextContainer>
                <StyledName>{name}</StyledName>
                <StyledMessageText>{text}</StyledMessageText>
            </StyledTextContainer>
            <StyledDetails>
                <StyledTimeAgo className={`${!isread && "isRead"}`}>{timeago}</StyledTimeAgo>
                {!isread && <StyledNumberOfMessage>{numberofmessage}</StyledNumberOfMessage>}
            </StyledDetails>
        </StyledMessageContainer>
    );
};

export default Message;
