import { useState, useEffect } from "react";
import DataVisualiser from "../components/DataVisualiser";

const DataContainer = function() {

    const [dataAPI, setDataAPI] = useState([]);


    useEffect(() => {
        fetchDataAPI();
    }, []);


    const fetchDataAPI = function () {
        const dataAPI = fetch('https://api.coronavirus.data.gov.uk/v1/data')
            .then(result => result.json())
            .then(API => setDataAPI(API.data));
        
       
    };




    return (
        <div>
            <h2>Container</h2>
            { dataAPI? <DataVisualiser data={dataAPI}></DataVisualiser> : null}
        </div>
    );
};

export default DataContainer;