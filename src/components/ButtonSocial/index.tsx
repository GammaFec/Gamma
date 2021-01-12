import React, { Fragment } from "react";
import { Paragraph, List, ItemList, Facebook, Google, Twitter } from "./styles";

interface Props {
    text: string;
    buttonsName: string[];
}

export const ButtonSocial = (props: Props) => {
    return (
        <Fragment>
            <Paragraph>{props.text}</Paragraph>
            <List>
                {props.buttonsName.map((button, index) => {
                    return (
                        <ItemList key={index}>
                            <a href="www.google.com">
                                {button.includes("facebook") ? (
                                    <Facebook className={`bx ${button}`}></Facebook>
                                ) : null}
                                {button.includes("google") ? (
                                    <Google className={`bx ${button}`}></Google>
                                ) : null}
                                {button.includes("twitter") ? (
                                    <Twitter className={`bx ${button}`}></Twitter>
                                ) : null}
                            </a>
                        </ItemList>
                    );
                })}
            </List>
        </Fragment>
    );
};

export default ButtonSocial;
