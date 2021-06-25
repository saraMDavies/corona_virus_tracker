import './ListItem.css';
const ListItem = function({day, onDateClick}) {

    const handleClick = function() {
        onDateClick(day);
      };

    return (
        <li className="list-item" onClick={handleClick}>{day.date}</li>
    );

};

export default ListItem;