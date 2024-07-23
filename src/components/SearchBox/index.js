import React, { useCallback, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import throttle from 'lodash/throttle';

const SearchBox = ({ onSearch }) => {
  const onThrottleChange = useRef(
    throttle((value) => {
      onSearch(value);
    }, 1000)
  ).current;

  const onInputChange = useCallback((event) => {
    const value = event.target.value;
    onThrottleChange(value);
  }, []);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Seach by username"
        aria-label="Seach by username"
        aria-describedby="basic-addon2"
        onChange={onInputChange}
        size="lg"
      />
    </InputGroup>
  );
};

export default SearchBox;
