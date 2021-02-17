import React from "react";
import { StyledParagraph, StyledList, StyledItemList, StyledSvg } from "./styles";
import { Icons } from "./icon";

const SocialLogins: React.FC<{ text: string }> = (text) => {
    return (
        <>
            <StyledParagraph>{text}</StyledParagraph>
            <StyledList>
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
