
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
        <div>
            <h3>{selectedDate.date}</h3>
            <h2>{selectedDate.casesDaily} cases</h2>
            <h2>{selectedDate.deathsDaily} deaths</h2>
            <h2>{selectedDate.firstVaccinationsDaily} first vaccinations</h2>
            {vaccsMoreThanDay? <p>{vaccsMoreThanDay + 1}{placementText} highest number of first vaccines in the last 30 days</p> : null}
            <h2>{selectedDate.secondVaccinationsDaily} second vaccinations</h2>
        </div>
    );
};

export default DataVisualiser;