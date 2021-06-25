import { useState, useEffect } from "react";

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
        <h2>Container</h2>
    );
};

export default DataContainer;