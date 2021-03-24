import React, { useState } from "react";
import Filter from "../components/Filter";

import JsonData from "../components/Filter/FilterData";

const NotFound: React.FC = () => {
    const [data, setData] = useState(JsonData);

    const filterHandler = (id: number): void => {
        const newData = [...data];
        const [newFilterData] = data.filter((eachData) => eachData.id === id);
        const indexOfFilter = newData.indexOf(newFilterData);

        newFilterData.active = !newFilterData.active;

        newData[indexOfFilter] = newFilterData;

        // eslint-disable-next-line no-console
        console.log(newData, indexOfFilter, newFilterData);

        setData(newData);
    };

    return (
        <>
            <Filter clickHandler={filterHandler} data={data} />
            <div>NotFound</div>
        </>
    );
};

export default NotFound;
