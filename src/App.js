import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      toRemove: [],
      list: this.props.data,
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding(name, code, address, latitude, longitude) {
    const id = this.state.list.length
    const building = {
      id: id + 1,
      code: code,
      name: name,
      address: address,
      coordinates: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      }
    }
    const NewList = this.state.list.concat([building])
    console.log(NewList)
    this.setState({
      list: NewList
    })
  }

  removeBuilding(id) {
    const ignoreList = this.state.toRemove.concat([id])
    this.setState({
      toRemove: ignoreList
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.list}
                    filterText={this.state.filterText}
                    selectedBuilding={this.state.selectedBuilding}
                    toRemove={this.state.toRemove}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)} />
                </table>
              </div>
            </div>
            <div>
              <AddBuilding
                list={this.state.list}
                addBuilding={this.addBuilding.bind(this)} />
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.list}
                selectedBuilding={this.state.selectedBuilding}
                list={this.state.list}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}
export default App;