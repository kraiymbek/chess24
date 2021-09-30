import React from 'react';
import { useRouter } from "next/router";

import MainLayout from "../../shared/MainLayout/MainLayout";
import FillerListItem from "../../components/FillerList/FillerListItem";

const FillerIndex = () => {
    const { query: { id } } = useRouter();

    return (
        <MainLayout>
            <FillerListItem />
        </MainLayout>
    );
};

export default FillerIndex;
