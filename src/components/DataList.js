import './DataList.css';
const DataList = function({data, handleSelectedDate}) {

    const handleClick = function() {
        console.log('clicked');
    };

    const dataList = data.map((day, index) => {
        return <li className="list-item" key={index} onClick={handleClick}>{day.date}</li>
    });

    return (
        <div>
            <h2>Date list:</h2>
            <ul>
                {dataList}
            </ul>
        </div>
        
    );
};

export default DataList;