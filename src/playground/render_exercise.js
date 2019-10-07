class AverageScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstScore: 78,
			secondScore: 81,
		};
	}

	render() {
		const { firstScore, secondScore } = this.state;
		return `The average score is: ${Math
			.round((firstScore + secondScore) / 2)}`;
	}
}

class AverageScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstScore: 78,
			secondScore: 81,
			newScore: this.props.newScore
		};
	}

	render() {
		const { firstScore, secondScore, newScore } = this.state;
        return `The average score is: 
        ${Math.round((firstScore + secondScore + newScore) / 3)}`;
	}
}


class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 7,
			b: 4,
			operation: this.props.operation
		};
	}

	render() {
		const {a, b, operation} = this.state;
		return operation === 'add' ? `The result is: ${a + b}` :
			operation === 'subtract' ? `The result is: ${a - b}` :
				'This operation is not supported yet!';
	}
}

class Calc extends React.Component {
	constructor(props) {
		super(props);
		const a = 7;
		const b = 4;
		this.state = {
			a,
			b,
			total: a + b + this.props.c
		};
	}

	render() {
		const { total } = this.state;
		return 'The total is: ' + total;
	}
}