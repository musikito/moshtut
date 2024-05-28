import { useState } from "react";

const ListGroup = () => {
    const items = [
        {
            id: 1,
            name: "New York",
        },
        {
            id: 2,
            name: "Rhode Island",
        },
        {
            id: 3,
            name: "San Francisco",
        },
        {
            id: 4,
            name: "Philadelphia",
        },
        {
            id: 5,
            name: "Chicago",
        },
    ];
    // items = [];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        items.length === 0 ? <p>No item found</p> : "Items";

    }
    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item.id} onClick={() => { setSelectedIndex(index); }}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;