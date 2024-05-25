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
    return (
        <>
            <h1>List</h1>
        <ul className="list-group">
       {items.map((item) => (
                <li className="list-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
      </ul>
      </>
    );
}

export default ListGroup;