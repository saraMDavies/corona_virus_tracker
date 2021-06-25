import DataVisualiser from "./DataVisualiser";

const DataList = function({data}) {

    const handleClick = function() {
        console.log('clicked');
    };

    const dataList = data.map((day, index) => {
        return <li key={index} onClick={handleClick}>{day.date}</li>
    });

    return (
        <div>
            <ul>
                {dataList}
            </ul>
            <DataVisualiser></DataVisualiser>
        </div>
        
    );
};

export default DataList;