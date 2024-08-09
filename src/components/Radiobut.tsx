import Form from 'react-bootstrap/Form';

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
