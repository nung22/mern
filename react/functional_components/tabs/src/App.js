import React, { useState } from 'react';

import './App.css';
import Tabs from './components/Tabs'
import TabContent from './components/TabContent'

function App() {
const [tabs, setTabs] = useState({
  1:"Tab 1 content.",
  2:"Tab 2 content.",
  3:"Tab 3 content.",
  4:"Tab 4 content."
});
const [currTab, setCurrTab] = useState(0);

const newTabClicked = newTab => {
  setCurrTab(newTab);
}
const tabChanged = changedContent => {
  setTabs({...tabs,
    [currTab]: changedContent})
}

  return (
    <div className='flex flex-col items-center mt-5 gap-5'>
      <Tabs onTabSwitch={newTabClicked}/>
      <TabContent onContentChange={tabChanged} currentTab={currTab} tabs={tabs} />
    </div>
  );
}

export default App;
