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
    timeago,
    numberofmessage,
    isread
}: IMessage): JSX.Element => {
    return (
        <StyledMessageContainer>
            <StyledUserAvatar />
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
