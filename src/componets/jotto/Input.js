
import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ secrectWord }) {
    return <div data-test="component-input"></div>;
}

Input.propTypes = {
    secrectWord: PropTypes.string.isRequired
}