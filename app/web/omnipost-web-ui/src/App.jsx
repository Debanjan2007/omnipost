import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="inline-block">Omnipost</h1>
        </div>
    )
}

export default App
