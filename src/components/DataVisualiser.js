
const DataVisualiser = function({selectedDate}) {
    return (
        <div>
            <h3>{selectedDate.date}</h3>
            <h2>{selectedDate.casesDaily} cases</h2>
            <h2>{selectedDate.deathsDaily} deaths</h2>
            <h2>{selectedDate.firstVaccinationsDaily} first vaccinations</h2>
            <h2>{selectedDate.secondVaccinationsDaily} second vaccinations</h2>
        </div>
    );
};

export default DataVisualiser;