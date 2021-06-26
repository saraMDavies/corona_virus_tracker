import './DataVisualiser.css';


const DataVisualiser = function({selectedDate, compareWeekBeforeCases}) {

    
    const percentageIncreaseLastWeek = compareWeekBeforeCases();

    const setpercentCasesText = function() {
        if (percentageIncreaseLastWeek > 0) {
            return "up";
        }
        return "down";
    };

    const percentCasesText = setpercentCasesText();


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
            <p>Cases {percentCasesText} {percentageIncreaseLastWeek}% on this day last week.</p>
            <div className="first-panel">
                <img className="image-icon"src='https://image.freepik.com/free-vector/cute-death-cartoon-character_257245-58.jpg'></img>
                <h3>{selectedDate.newDeaths28DaysByPublishDate} deaths</h3>
            </div>
            
        </div>
    );
};

export default DataVisualiser;