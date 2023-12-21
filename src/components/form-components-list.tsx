import { PropsWithChildren } from "react";
import { Droppable } from '@hello-pangea/dnd';

export function FormComponentsList({children}: PropsWithChildren) {
  return (
    <div className={'w-1/3 p-8 border-2 border-gray-300 border-dashed rounded-lg'}>
      <h1 className={'font-bold mb-4'}>Form Components</h1>
      <Droppable droppableId="form-components">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={'flex flex-col space-y-1'}>
            {/* Example Inputs */}
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}