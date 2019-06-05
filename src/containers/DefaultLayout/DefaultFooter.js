import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://insureway.com">InsureWAY</a> &copy; 2019 Invest Naira.</span>
        <span className="ml-auto">Powered by <a href="https://investnaira.com">Invest Naira</a></span>
        <SocialIcon url="http://twitter.com/jaketrent" />
        <SocialIcon url="http://facebook.com/jaketrent" />
        <SocialIcon url="http://instagram.com/jaketrent" />

      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
