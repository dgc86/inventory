import React from "react";

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
            count: 0,
        };
    }
    componentDidMount(){
        console.log("mounted!");
    }

    componentDidUpdate(){
        console.log();
    }

    componentWillUnmount(){
        console.log("clicked!");
        this.props.destroy(false)
    }

    clickedButton()
    {
        this.setState({count: this.state.count +1});
        console.log("Clicked!");
    }
    render() {
        return(
        <div>
            <p>Clicked: {this.state.count}</p>
            <button className = "btn btn-primary " onClick={() => this.clickedButton()}>
                click Me!
            </button>
        </div>);
    }


}