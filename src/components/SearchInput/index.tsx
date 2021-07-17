/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import Input from "../Input";
import loupe from "../../assets/img/search-icon.svg";
//Translate - i18next
import { useTranslation } from "react-i18next";

const SearchInput = (): JSX.Element => {
    const { t } = useTranslation();

    const [searchKeyword, setSearchKeyword] = useState("");

    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newSearchKeyword = event.target.value.trim();
        return setSearchKeyword(newSearchKeyword);
    };
    const searchInputSubmit = (): void => {
        alert(`Tu búsqueda es ${searchKeyword}`);
    };
    return (
        <Input
            icon={loupe}
            iconPositionLeft={true}
            id="current-password"
            name="current-password"
            onChange={searchInputHandler}
            onIconClick={searchInputSubmit}
            placeholder={t("Search:Placeholder")}
            type="text"
            value={searchKeyword}
        />
    );
};

export default SearchInput;
