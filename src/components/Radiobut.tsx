import Form from 'react-bootstrap/Form';
import React from 'react';

function SwitchExample({ label = "Seller" }) {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={label}
      />
    </Form>
  );
}

export default SwitchExample;
