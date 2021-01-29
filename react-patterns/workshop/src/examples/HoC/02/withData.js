import React, { Component } from "react";

const withData = (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: [],
    };

    componentDidMount() {
      fetch("http://localhost:3001/characters")
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

export default withData;
