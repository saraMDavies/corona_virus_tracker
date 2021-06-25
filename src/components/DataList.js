import { getByDisplayValue } from '@testing-library/react';
import './DataList.css';
import ListItem from './ListItem';

const DataList = function({data, onDateClick}) {

    const calculatePlacementFirstVaccs = function(selectedDate) {
        let countAbove = 0;
        let countBelow = 0;
        for (let day in data) {
            if (day.firstVaccinationsDaily > selectedDate.firstVaccinationsDaily) {
                countAbove += 1;
            }
            else if (day.firstVaccinationsDaily < selectedDate.firstVaccinationsDaily) {
                countBelow += 1;
            }
        };
        return [countAbove, countBelow];
       
    };

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