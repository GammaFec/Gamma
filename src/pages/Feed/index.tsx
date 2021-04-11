import React, { useState, ReactElement } from "react";

import Filter from "../../components/Filter/";

import JsonData from "../../components/Filter/FilterData";

const FeedPage = (): ReactElement => {
    const [data, setData] = useState(JsonData);

    const filterHandler = (id: number): void => {
        const newData = [...data];
        const [newFilterData] = data.filter((eachData) => eachData.id === id);
        const indexOfFilter = newData.indexOf(newFilterData);

        newFilterData.active = !newFilterData.active;

        newData[indexOfFilter] = newFilterData;

        setData(newData);
    };

    return (
        <main>
            <Filter clickHandler={filterHandler} data={JsonData} />
        </main>
    );
};

export default FeedPage;
