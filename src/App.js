import React from 'react';
import ReactDOM from "react-dom/client";

// Przycisk - po kliknięciu dodowania jest kolejna literka


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: "",
    //     }
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = {
        text: ""
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)
        this.setState({
            text: this.state.text + number
        })
    }

    // trzeba dodać bind do this w miejscu w którym
    // jest uruchamiana funkcja

    // można również zwracać funkcję która ma przypisanego do argumentu poprzednika this
    handleClick() {
        const letter = "a";
        this.setState((prevState) => ({
                text: this.state.text + letter
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Dodaj Cyfrę</button>
                <PanelResult text={this.state.text}/>
            </React.Fragment>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))


export default App;