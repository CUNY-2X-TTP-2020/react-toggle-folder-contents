import React, { Component } from "react";

export default class Folder extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { visible: this.props.visible };
    }

    changeVisibility = () => 
    {
        if (this.state.visible == true) this.setState({ visible: false });
        else this.setState({ visible: true });
    };

    showFiles = () => 
    {
        if (this.state.visible == true) 
        {
            return (
                <ul>
                    <li>File 1</li>
                    <li>File 2</li>
                    <li>File 3</li>
                </ul>
            );
        }
    };

    render() 
    {
        return (
            <>
                <h3>Home</h3>
                <button visible={this.state.visible} onClick={this.changeVisibility}>Toggle</button>
                {this.showFiles()}
            </>
        );
    }
}