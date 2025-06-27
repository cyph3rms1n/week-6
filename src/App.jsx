function App() {
    return <div>
        <CardWrapper innerComponent = {<TextComponenet/>} />
    </div>

}

function TextComponenet(){
    return <div>
        Hi there
    </div>
}

function CardWrapper({innerComponent }) {
    // Create a div which has a border (Hint: The way to create a border is border:"2px solid black")
    // And inside the div, renters the prop
    return <div style = {{border:"2px solid black"}}>
        {innerComponent}
    </div>
}


export default App
