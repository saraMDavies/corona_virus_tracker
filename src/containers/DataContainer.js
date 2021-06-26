import { useState, useEffect } from "react";
import DataList from "../components/DataList";
import DataVisualiser from "../components/DataVisualiser";
import './DataContainer.css';

const DataContainer = function() {

    const [dataAPI, setDataAPI] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [weekBeforeSelectedDate, setWeekBeforeSelectedDate] = useState(null);


    useEffect(() => {
        fetchDataAPI();
    }, []);


    const fetchDataAPI = function () {
        fetch('https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=Scotland;areaType=nation&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22}')
            .then(result => result.json())
            .then(API => setDataAPI(API.data.splice(0,100)));
        
    };

    const onDateClick = function(day, index) {
        setSelectedDate(day);
        const oneWeekAgo = dataAPI.filter((date, index_of_date) => {
            return index_of_date === index + 7;
        });
        setWeekBeforeSelectedDate(oneWeekAgo);
    };

    

    const compareWeekBeforeCases = function() {
        if(weekBeforeSelectedDate[0]) {
            const percentageIncrease = -100 + (selectedDate.newCasesByPublishDate / weekBeforeSelectedDate[0].newCasesByPublishDate) * 100
            return parseInt(percentageIncrease)
        };     
    };

    const compareWeekBeforeDeaths = function() {
        if(weekBeforeSelectedDate[0]) {
            const percentageIncrease = -100 + (selectedDate.newDeaths28DaysByPublishDate / weekBeforeSelectedDate[0].newDeaths28DaysByPublishDate) * 100
            return parseInt(percentageIncrease);
        };     
    };



    return (
        <div>
            <header>
                <h1>Last 100 days of coronavirus data in Scotland</h1>
                <a target="_blank" href='https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=Scotland;areaType=nation&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22}'>API link</a>
            </header>
            <body className="container">
            { dataAPI? <DataList data={dataAPI} onDateClick={onDateClick}></DataList> : null}
            { selectedDate? <DataVisualiser compareWeekBeforeCases={compareWeekBeforeCases} compareWeekBeforeDeaths={compareWeekBeforeDeaths} selectedDate={selectedDate}></DataVisualiser> : null}
            </body>
        </div>
    );
};

export default DataContainer;