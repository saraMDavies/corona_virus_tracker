import { useState, useEffect } from "react";
import DataList from "../components/DataList";
import DataVisualiser from "../components/DataVisualiser";
import './DataContainer.css';

const DataContainer = function() {

    const [dataAPI, setDataAPI] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [vaccsMoreThanDay, setVaccsMoreThanDay] = useState(null);


    useEffect(() => {
        fetchDataAPI();
    }, []);


    const fetchDataAPI = function () {
        fetch('https://api.coronavirus.data.gov.uk/v1/data')
            .then(result => result.json())
            .then(API => setDataAPI(API.data.splice(1,30)));
        
    };

    const onDateClick = function(day) {
        setSelectedDate(day);
    };

    const calculateVaccsMoreThanDay = function(date) {
        let countAbove = 0;
        for (let day of dataAPI) {
            if (day.firstVaccinationsDaily > selectedDate.firstVaccinationsDaily) {
                countAbove += 1;
            }
        };
        setVaccsMoreThanDay(countAbove);
       
    };



    return (
        <div>
            <header>
                <h1>Last 30 days of corona virus data in UK</h1>
                <a href='https://api.coronavirus.data.gov.uk/v1/data'>API link</a>
            </header>
            <body className="container">
            { dataAPI? <DataList data={dataAPI} onDateClick={onDateClick}></DataList> : null}
            { selectedDate? <DataVisualiser calculateVaccsMoreThanDay={calculateVaccsMoreThanDay} vaccsMoreThanDay={vaccsMoreThanDay} selectedDate={selectedDate}></DataVisualiser> : null}
            </body>
        </div>
    );
};

export default DataContainer;