import ListItem from './ListItem';
import './DataList.css';

const DataList = function({data, onDateClick}) {

    

    const dataList = data.map((day, index) => {
        return <ListItem index={index} day={day} onDateClick={onDateClick}></ListItem>
    });

    return (
        <div className="list-page">
            <h2>Click a date to view stats</h2>
            <ul className="list">
                {dataList}
            </ul>
        </div>
        
    );
};

export default DataList;