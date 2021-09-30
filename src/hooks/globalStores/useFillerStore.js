import { useContext } from 'react';

import { FillerContext } from "../../context/FillerProvider";

export default function useFillerStore() {
    const fillerContext = useContext(FillerContext);
    return fillerContext;
}
