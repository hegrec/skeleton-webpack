import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addValue, subtractValue } from 'reducers/counter';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">Go to About</Link>
        <div>
          <span>The value is: </span><strong>{this.props.value}</strong>
        </div>
        <div>
          <button onClick={this.props.increase}>Add</button>
          <button onClick={this.props.decrease}>Subtract</button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  value: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(addValue()),
  decrease: () => dispatch(subtractValue())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
