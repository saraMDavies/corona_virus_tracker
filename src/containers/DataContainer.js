import { useState, useEffect } from "react";
import DataList from "../components/DataList";

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
            { dataAPI? <DataList data={dataAPI}></DataList> : null}
        </div>
    );
};

export default DataContainer;