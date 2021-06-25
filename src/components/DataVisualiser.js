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

    const placementText = calulatePlacementFirstVaccsText();

    return (
        <div className="visualiser">
            <div className="first-panel">
                <img className="image-icon" src='https://www.creativefabrica.com/wp-content/uploads/2020/12/30/Calendar-time-Schedule-pencil-Cartoon-Graphics-7461841-1.jpg'></img>
                <h2>{selectedDate.date}</h2>
            </div>
            <div className="first-panel">
                <img className="image-icon" src='https://image.freepik.com/free-vector/cute-virus-cartoon-character-posing-style_313669-117.jpg'></img>
                <h3>{selectedDate.casesDaily} cases</h3>
            </div>
            <div className="first-panel">
                <img className="image-icon"src='https://image.freepik.com/free-vector/cute-death-cartoon-character_257245-58.jpg'></img>
                <h3>{selectedDate.deathsDaily} deaths</h3>
            </div>
                <div className="vacc-panel">
                    <img className="image-icon" src='https://media.istockphoto.com/vectors/smiling-cartoon-character-mascot-medical-syringe-vaccine-thumb-up-vector-id1285359800?k=6&m=1285359800&s=170667a&w=0&h=DuhcsiqE4JkzlhbB7xMIBe4z63K2cUYlzcNpCo0MGh8='></img>
                    <h3>Vaccination data:</h3>
                </div>
                <h4>{selectedDate.firstVaccinationsDaily} first vaccinations</h4>
                {vaccsMoreThanDay? <p>({vaccsMoreThanDay + 1}{placementText} highest number of first vaccines in the last 30 days)</p> : null}
                <h4>{selectedDate.secondVaccinationsDaily} second vaccinations</h4>
            
        </div>
    );
};

export default DataVisualiser;