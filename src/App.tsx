import './App.css';
import "@cloudscape-design/global-styles/index.css" 
import Button from "@cloudscape-design/components/button"
import ButtonDropdown from '@cloudscape-design/components/button-dropdown';
import Flashbar from '@cloudscape-design/components/flashbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonDropdown 
          items={[
            {text: "Go Left <", id: "goLeft", disabled: false},
            {text: "Go Right >", id: "goLeft", disabled: false},
            {text: "Go Up ^", id: "goLeft", disabled: false},
          ]}
          >Choose Your Direction</ButtonDropdown>
          <Button onClick={save}>Save</Button>
      </header>
    </div>
  );
}

function save() {
  return Flashbar(
    {
    items: [{
      id: "message_1",
      content: (<>"this is content"</>),
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss Message"
    }]})
};

export default App;
