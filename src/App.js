import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import ComponentSelector from './components/ComponentSelector';
import StoreDemo1 from './components/store-demo1/StoreDemo1';
import TodoWidget from './components/todo-widget/TodoWidget';
import RouterDemo1 from './components/router-demo1/RouterDemo1';

const componentMap = {
  counter: <Counter />,
  dummy: <div>dummy</div>,
  storeDemo1: <StoreDemo1 />,
  todoWidget: <TodoWidget />,
  routerDemo1: <RouterDemo1 />
}
const DEFAULT_SELECTED_COMPONENT_NAME = 'storeDemo1';

function App() {

  const [selectedComponentName, setSelectedComponentName] = React.useState(DEFAULT_SELECTED_COMPONENT_NAME);
  let component = componentMap[selectedComponentName] || componentMap[DEFAULT_SELECTED_COMPONENT_NAME];

  const handleComponentSelection = (componentName) => {
    setSelectedComponentName(componentName);
  };

  return (
    <div className="App">
      <ComponentSelector
        onSelectComponent={handleComponentSelection}
        currentComponentName={selectedComponentName}
        componentNameList={Object.keys(componentMap)} />
      <div className="main">
        {component}
      </div>
    </div>
  );
}

export default App;
