import { PropsWithChildren } from "react"
import { Droppable } from '@hello-pangea/dnd';

export function FormCanvas({children}: PropsWithChildren) {
  return (
    <Droppable droppableId="canvas">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className={'w-2/3 p-8 border-2 border-gray-500 border-dashed rounded-lg'}>
          <h1 className={'font-bold mb-4'}>Form Canvas</h1>
            <div className="text-gray-500 flex flex-col space-y-1 items-center">
              {/* Area to drag and drop components */}
              Drag and drop form components here...
              {children}
              {provided.placeholder}
            </div>
        </div>
      )}
    </Droppable>
  )
}