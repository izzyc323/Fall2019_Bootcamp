import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const clicked = this.props.data.filter(building => {
			return building.id == this.props.selectedBuilding
		})
		//console.log(clicked)
		if (this.props.selectedBuilding == 0) {
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		else {
			return (
				<div>
					<p>
						ID: {' '} {clicked[0].id}
					</p>
					<p>
						Code: {' '} {clicked[0].code}
					</p>
					<p>
						Name: {' '} {clicked[0].name}
					</p>
					<p>
						Address: {' '} {clicked[0].address}
					</p>
					<p>
						<b>Coordinates {' '} </b>
					</p>
					<p>
						latitude: {' '} {clicked[0].coordinates.latitude}
					</p>
					<p>
						longitude: {' '} {clicked[0].coordinates.longitude}
					</p>
				</div>
			);
		}

	}
}
export default ViewBuilding;
