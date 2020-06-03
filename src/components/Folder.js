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
                <ul className="dropdown-menu">
                    <li className="dropdown-item1">File 1</li>
                    <li className="dropdown-item2">File 2</li>
                    <li className="dropdown-item3">File 3</li>
                </ul>
            );
        }
    };

    render() 
    {
        return (
            <section className="folder">
                <h2>Home</h2>
                <button visible={this.state.visible} onClick={this.changeVisibility}>Toggle</button>
                {this.showFiles()}
            </section>
        );
    }
}