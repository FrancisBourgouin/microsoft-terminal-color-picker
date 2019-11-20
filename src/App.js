import React, {useState} from 'react';
import './App.css';
import { WindowsTerminal } from './WindowsTerminal';
import { SketchPicker } from 'react-color';

function App() {
  const [selectedColor, setSelectedColor] = useState("")
  const [showJSON, setShowJSON] = useState(false)
  const [schemaName, setSchemaName] = useState("Custom Schema")
  const [colorScheme, setColorScheme] = useState(
    {
      background: "#000",
      black: "#000",
      blue: "#0000ff",
      brightBlack: "#808080",
      brightBlue: "#0308F7",
      brightCyan: "#00FFFC",
      brightGreen: "#04FF3B",
      brightPurple: "#FF00FA",
      brightRed: "#FF0029",
      brightWhite: "#FFFFFF",
      brightYellow: "#FFFF49",
      cyan: "#008080",
      foreground: "#FFF",
      green: "#008119",
      purple: "#800800",
      red: "#80010F",
      white: "#C0C0C0",
      yellow: "#808020",
    }
  )
  
  const updateColor = (val) =>{
    setColorScheme(prev => {
      const colorScheme = {...prev}
      colorScheme[selectedColor] = val.hex
      return colorScheme
    })
  }

  const buildJSON = () => {
    const output = {...colorScheme}
    output.name = schemaName

    return JSON.stringify(output, null, 2)
  }
const colorPickerOptions = Object.keys(colorScheme).map( color => {
  return(
    <li key={color}>
      <input type="radio" name="currentColor" value={color} id={color} checked={selectedColor === color} onChange={() => setSelectedColor(color)}></input>
      <label style={{borderColor: colorScheme[color]}} htmlFor={color}>{color}</label>
    </li>
  )
})
  return (
    <div className="App">
      <WindowsTerminal colorScheme={colorScheme} />
      {!showJSON && 
        <div className="colorPicker">
          <ul>
            {colorPickerOptions}
          </ul>
          <div>
            <SketchPicker color={colorScheme[selectedColor]} onChange={ updateColor } />
            <input type="text" id="schemaName" name="schemaName" value={schemaName} onChange={ e => setSchemaName(e.target.value)}></input>
            <button onClick={() => setShowJSON(prev => !prev)}>Show JSON</button>
          </div>         
        </div>
      }
      {showJSON &&
        <div className="showJSON">
          <textarea>
            {buildJSON()}
          </textarea>
          <button onClick={() => setShowJSON(prev => !prev)}>Show Color Picker</button>
        </div>
      }
    </div>
  );
}

export default App;
