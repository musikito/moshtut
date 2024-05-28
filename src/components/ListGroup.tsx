import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectitem: (item: string) => void;
}


const ListGroup = ({ items, heading, onSelectitem }: Props) => {


    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        items.length === 0 ? <p>No item found</p> : "Items";

    }
    return (
        <>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={index} onClick={() => { setSelectedIndex(index); onSelectitem(item); }} >
                        {item}
                    </li>
                ))}

            </ul>
        </>
    );
}

export default ListGroup;