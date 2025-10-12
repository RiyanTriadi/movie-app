import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Washington DC", "Jakarta", "Tokyo", "Seoul", "Kuala Lumpur"];
  const handeSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handeSelectItem}
      />
    </div>
  );
}

export default App;
