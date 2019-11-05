import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate(id) {
		this.props.selectedUpdate(id)
	}
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, toRemove } = this.props;

		const buildingList = data
			.filter(directory => {
				return ((((directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) ||
					(directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0))) &&
					(toRemove.indexOf(directory.id) < 0))
			})
			.map(directory => {
				return (
					<div>
						<tr key={directory.id}
							onClick={() => this.selectedUpdate(directory.id)} >
							<td>{directory.code} </td>
							<td> {directory.name} </td>
						</tr>
						<button onClick={() => this.props.removeBuilding(directory.id)}> x </button>
					</div>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
