import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import './error.css';
import { getErrorMessage } from '../error.selectors';

const ErrorContainer = ({ errorMessage }) => (
  <div>
    {!_.isEmpty(errorMessage) && (
      <div className="errorBox">
        <p>{errorMessage}</p>
      </div>
    )}
  </div>
);

ErrorContainer.propTypes = {
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  errorMessage: getErrorMessage(state)
});

export default connect(mapStateToProps)(ErrorContainer);
