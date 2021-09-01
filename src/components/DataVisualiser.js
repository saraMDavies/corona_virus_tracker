import './DataVisualiser.css';


const DataVisualiser = function({selectedDate, compareWeekBeforeCases, compareWeekBeforeDeaths}) {

    
    const percentageIncreaseCasesLastWeek = compareWeekBeforeCases();
    const percentageIncreaseDeathsLastWeek = compareWeekBeforeDeaths();

    console.log(percentageIncreaseDeathsLastWeek);

    const setpercentCasesText = function() {
        if (percentageIncreaseCasesLastWeek > 0) {
            return "up";
        }
        return "down";
    };

    const percentCasesText = setpercentCasesText();

    const setpercentDeathsText = function() {
        if (percentageIncreaseDeathsLastWeek > 0) {
            return "up";
        }
        return "down";
    };

    const percentDeathsText = setpercentDeathsText();


    return (
        <div className="visualiser">
            <div className="first-panel">
                <img className="image-icon" src='https://www.creativefabrica.com/wp-content/uploads/2020/12/30/Calendar-time-Schedule-pencil-Cartoon-Graphics-7461841-1.jpg'></img>
                <h2>{selectedDate.date}</h2>
            </div>
            <div className="first-panel">
                <img className="image-icon" src='https://image.freepik.com/free-vector/cute-virus-cartoon-character-posing-style_313669-117.jpg'></img>
                <h3>{selectedDate.newCasesByPublishDate} cases</h3>
            </div>
            { percentageIncreaseCasesLastWeek? <p>Cases {percentCasesText} {Math.abs(percentageIncreaseCasesLastWeek)}% on this day last week.</p> : 'Data not available'}
            <div className="first-panel">
                <img className="image-icon"src='https://icon-library.com/images/dead-icon/dead-icon-17.jpg'></img>
                <h3>{selectedDate.newDeaths28DaysByPublishDate} deaths</h3>
            </div>
            { percentageIncreaseDeathsLastWeek? <p>Deaths {percentDeathsText} {Math.abs(percentageIncreaseDeathsLastWeek)}% on this day last week.</p> : 'Data not available'}
            
        </div>
    );
};

export default DataVisualiser;