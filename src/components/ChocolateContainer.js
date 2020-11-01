import React from "react";
import { buyChocolate } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
	return (
		<div>
			<h2>Number of IceCream - {props.numOfChocolate}</h2>
			<button onClick={props.buyChocolate}>Buy Chocolate</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfChocolate: state.chocolate.numOfChocolate,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyChocolate: () => dispatch(buyChocolate()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
