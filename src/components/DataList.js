import { getByDisplayValue } from '@testing-library/react';
import './DataList.css';
import ListItem from './ListItem';

const DataList = function({data, onDateClick}) {

    

    const dataList = data.map((day, index) => {
        return <ListItem key={index} day={day} onDateClick={onDateClick}></ListItem>
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