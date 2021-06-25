
const DataVisualiser = function({data}) {

    const dataList = data.map((day, index) => {
        return <li key="index">{day.date}</li>
    });

    return (
        <ul>
            {dataList}
        </ul>
    );
};

export default DataVisualiser;