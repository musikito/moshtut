import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  let items = [
    "New York",

    "Rhode Island",

    "San Francisco",

    "Philadelphia",

    "Chicago",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hola <span> Mundo@</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Boton</Button>
    </div>
  );
};

export default App;
