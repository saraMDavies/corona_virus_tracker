import './ListItem.css';
const ListItem = function({day, index, onDateClick}) {

    const handleClick = function() {
        onDateClick(day, index);
      };

    return (
        <li className="list-item" onClick={handleClick}>{day.date}</li>
    );

};

export default ListItem;