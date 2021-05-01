import React from 'react'
import PropTypes from 'prop-types'
function ShelfChanger(props) {
    const { onShelfChange, shelf } = props;
    return (
        <div className="book-shelf-changer">
            <select onChange={onShelfChange} value={shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Finished Reading</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
ShelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
export default ShelfChanger;