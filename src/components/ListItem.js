
const ListItem = function({day, onDateClick}) {

    const handleClick = function() {
        onDateClick(day);
      };

    return (
        <li onClick={handleClick}>{day.date}</li>
    );

};

export default ListItem;