import { Draggable } from '@hello-pangea/dnd';

interface FormComponentProps {
  title: string,
  id: string,
  index: number,
  persist?: boolean
}
export function FormComponent(props: FormComponentProps) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => (
        <>
          <div ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={'px-4 py-2 rounded border bg-gray-200 max-w-xs w-full'}
          >
            {props.title}
          </div>
          {
            props.persist && snapshot.isDragging &&
            <div className={'px-4 py-2 rounded border bg-gray-200 max-w-xs w-full'}>{props.title}</div>
          }
        </>
      )}
    </Draggable>
  )
}