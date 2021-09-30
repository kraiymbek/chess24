import React, { createContext, useState } from 'react';

import { listService } from "../services/listService";

export const FillerContext = createContext(null);

export const FillerProvider = ({ children }) => {
    const [_fillerData, _setFillerData] = useState([]);

    const getFillerById = (id) => {
        return _fillerData[id];
    };

    const getRemoteFillerList = () => {
        listService.getFillers()
            .then(res => _setFillerData((prev) => [...prev, ...res]))
            .catch(err => console.log(err));
    };

    const getActualFillerList = () => {
        return _fillerData;
    }

    return (
        <FillerContext.Provider
            value={{
                getFillerById,
                getRemoteFillerList,
                getActualFillerList,
            }}>
            {children}
        </FillerContext.Provider>
    );
};
