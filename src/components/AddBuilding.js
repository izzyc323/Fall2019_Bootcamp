import React from 'react';

//https://scotch.io/courses/getting-started-with-react/making-an-input-component

class AddBuilding extends React.Component {
    test() {
        console.log("5")
    }
    render() {
        return (
            <div>
                <h3>New Building</h3>
                <form>
                    <label htmlFor="name">Building Name: </label>
                    <input
                        type="input"
                        name="name" 
                        ref = {(name) => this.name = name}/>
                    <p></p>
                    <label htmlFor="code">Building Code: </label>
                    <input
                        type="input"
                        name="code" 
                        ref = {(code) => this.code = code}/>
                    <p></p>
                    <label htmlFor="address">Building Address: </label>
                    <input
                        type="input"
                        name="address" 
                        ref = {(address) => this.address = address}/>
                    <p></p>
                    <h4>
                        Coordinates:
                    </h4>
                    <p></p>
                    <label htmlFor="latitude">latitude </label>
                    <input
                        type="input"
                        name="latitude" 
                        ref = {(latitude) => this.latitude = latitude}/>
                    <p></p>
                    <label htmlFor="longtiude">longitude </label>
                    <input
                        type="input"
                        name="longtiude" 
                        ref = {(longitude) => this.longitude = longitude}/>
                </form>
                <button onClick={ ()=> this.props.addBuilding(                   
                    this.name.value,
                    this.code.value,
                    this.address.value,
                    this.latitude.value,
                    this.longitude.value
                    )}>
                    <i>Add Building</i>
                </button>
            </div>
        ); 
    }
}

export default AddBuilding;