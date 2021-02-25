import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";

let chooseBgColor = function (): string {
  const now = new Date()
  const hours = now.getHours()

  if (hours >= 0 && hours < 6) {
    return 'night'
  }
  if (hours >= 6 && hours < 12) {
    return 'morning'
  }
  if (hours >= 12 && hours < 18) {
    return 'afternoon'
  }
  if (hours >= 18 && hours < 24) {
    return 'evening'
  }
  return 'afternoon'
}

function App() {
  const [bgColor,] = useState(chooseBgColor())
  const appClass = `App ${bgColor}`

  return (
    <div className = {appClass}>
      <Header typeOfLogoIcon={bgColor}/>
    </div>
  );
}

export default App;
