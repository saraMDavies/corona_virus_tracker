import './DataVisualiser.css';


const DataVisualiser = function({selectedDate, calculateVaccsMoreThanDay, vaccsMoreThanDay}) {

    calculateVaccsMoreThanDay(selectedDate)

    const calulatePlacementFirstVaccsText = function() {
        if (vaccsMoreThanDay) {
            if (vaccsMoreThanDay === 11 || vaccsMoreThanDay === 12 || vaccsMoreThanDay === 13) {
                return 'th';
            }
            else {
                let lastDigit = (vaccsMoreThanDay+1).toString().split('').pop();
                if (lastDigit === '1') {
                    return 'st';
                }
                else if (lastDigit === '2') {
                    return 'nd';
                }
                else if (lastDigit === '3') {
                    return 'rd'
                }
                else {
                    return 'th'
                };
            };
        };
    };

    const getArrow = function() {
        if (vaccsMoreThanDay > 15) {
            return 'data:image/jpeg;base64,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';
        }
        else if (vaccsMoreThanDay > 15) {
            return 'https://cdn.arrowpng.com/images/red-down-arrow.png';
        };
    };

    const arrow = getArrow();

    const placementText = calulatePlacementFirstVaccsText();

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
            <div className="first-panel">
                <img className="image-icon"src='https://image.freepik.com/free-vector/cute-death-cartoon-character_257245-58.jpg'></img>
                <h3>{selectedDate.newDeaths28DaysByPublishDate} deaths</h3>
            </div>
                <div className="vacc-panel">
                    <img className="image-icon" src='https://media.istockphoto.com/vectors/smiling-cartoon-character-mascot-medical-syringe-vaccine-thumb-up-vector-id1285359800?k=6&m=1285359800&s=170667a&w=0&h=DuhcsiqE4JkzlhbB7xMIBe4z63K2cUYlzcNpCo0MGh8='></img>
                    <h3>Vaccination data:</h3>
                </div>
                <h4>{selectedDate.firstVaccinationsDaily} first vaccinations</h4>
                {vaccsMoreThanDay? <div>
                    <img className="image-icon-small" src={arrow}></img>
                    <p>({vaccsMoreThanDay + 1}{placementText} highest number of first vaccines in the last 30 days)</p>
                </div> : null}
                <h4>{selectedDate.secondVaccinationsDaily} second vaccinations</h4>
            
        </div>
    );
};

export default DataVisualiser;