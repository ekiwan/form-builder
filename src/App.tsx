import './App.css'

function App() {
    return (
        <div className={'flex space-x-2 border-2 border-violet-300 rounded-lg p-10'}>
            <div className={'w-1/3 p-8 border-2 border-gray-300 border-dashed rounded-lg'}>
                <h1 className={'font-bold mb-4'}>Form Components</h1>

                <div className={'flex flex-col space-y-1'}>
                    {/* Example Inputs */}
                    <div className={'px-4 py-2 rounded border bg-gray-200'}>Text Input</div>
                    <div className={'px-4 py-2 rounded border bg-gray-200'}>Checkbox</div>
                    <div className={'px-4 py-2 rounded border bg-gray-200'}>Radio</div>
                    <div className={'px-4 py-2 rounded border bg-gray-200'}>Dropdown</div>
                </div>
            </div>
            <div className={'w-2/3 p-8 border-2 border-gray-500 border-dashed rounded-lg'}>
                <h1 className={'font-bold mb-4'}>Form Canvas</h1>
                <div className="text-gray-500">
                    {/* Area to drag and drop components */}
                    Drag and drop form components here...
                </div>
            </div>

        </div>
    )
}

export default App
