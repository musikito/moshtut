import ListGroup from "./components/ListGroup"; 

const App = () => {

    let items = [
       
           
             "New York",
       
           
            "Rhode Island",
       
           
            "San Francisco",
       
           
             "Philadelphia",
       
            
            "Chicago",
       
    ];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
        return (<div><ListGroup items={items} heading="List of cities" onSelectitem={handleSelectItem} /></div>);
}

export default App;