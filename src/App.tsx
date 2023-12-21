import { useState } from 'react'
import './App.css'
import { v4 as uuid } from "uuid";
import { FormCanvas, FormComponentsList, FormComponent } from './components'
import { DragDropContext } from '@hello-pangea/dnd';
function App() {
  const [cavasItems, setCanvasItems] = useState([]);

  const sourceComponents = [
    {title: 'Text Input'},
    {title: 'Checkbox'},
    {title: 'Radio'},
    {title: 'Dropdown'}
  ]

  const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
  
    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === 'form-components') {
      const newItems = copy(
        sourceComponents,
        cavasItems,
        source,
        destination
      )
      setCanvasItems(newItems);
    }

    if (source.droppableId === 'canvas') {
      const newItems = reorder(
        cavasItems,
        source.index,
        destination.index
      );

      setCanvasItems(newItems);
    }



  }
  return (
    <div className={'flex space-x-2 border-2 border-violet-300 rounded-lg p-10'}>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <FormComponentsList>
          {sourceComponents.map((component, index) => {
            const id = uuid();
            return (
              <FormComponent key={id} id={id} title={component.title} index={index} persist/>
            )
          })}
        </FormComponentsList>

        <FormCanvas>
          {cavasItems.map((item, index) => {
            const id = uuid();
            return (
              <FormComponent key={id} id={id} title={item.title} index={index}/>
            )
          })}
        </FormCanvas>
      </DragDropContext>
    </div>
  )
}

export default App
