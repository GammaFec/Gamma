import React from "react";

export const SocialMedia = () => {
    return (
        <div className="social">
            <ul className="social__list">
                <li className=".social__facebook">
                    <a href="#">
                        <i className="bx bxl-facebook-circle"></i>
                    </a>
                </li>
                <li className=".social__instagram">
                    <a href="">
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                </li>
                <li className=".social__gmail">
                    <a href="">
                        <i className="bx bxl-google"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};
