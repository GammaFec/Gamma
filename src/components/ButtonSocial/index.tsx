import React from "react";
import { StyledParagraph, StyledList, StyledItemList, StyledSvg } from "./styles";
import { Icons } from "./icon";
import { ISocialLogins } from "./types";

const SocialLogins = ({ text }: ISocialLogins): JSX.Element => {
    return (
        <>
            <StyledParagraph>{text}</StyledParagraph>
            <StyledList title="Icon list">
                {Icons.map((icon) => {
                    return (
                        <StyledItemList key={icon.name}>
                            <a href={icon.url}>
                                <StyledSvg style={{ background: `${icon.color}` }}>
                                    <path d={icon.image}></path>
                                </StyledSvg>
                            </a>
                        </StyledItemList>
                    );
                })}
            </StyledList>
        </>
    );
};
export default SocialLogins;
