import React from "react";
import Message from "../components/Message";

const NotFound: React.FC = () => {
    return (
        <div>
            <Message
                handleClick={(): void => alert("clicked")}
                isread={false}
                name="pedro"
                numberofmessage={3}
                src={"https://thispersondoesnotexist.com/image"}
                text="erseasdasdasdsad"
                timeago="23m"
            />
        </div>
    );
};

export default NotFound;
