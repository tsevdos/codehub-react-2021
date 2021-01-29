import React, { Component } from "react";
import { Spin } from "antd";

const withLoader = (WrappedComponent) => {
  class withLoaderComponent extends Component {
    render() {
      const { isLoading } = this.props;

      return isLoading ? (
        <Spin size="large" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return withLoaderComponent;
};

export default withLoader;
