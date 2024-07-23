import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const ModalRow = ({ name, value, isImage }) => (
  <Row>
    <Col xs={6} md={4}>
      <h4>{name}</h4>
    </Col>
    <Col xs={6} md={4}>
      {isImage ? <Image src={value} thumbnail /> : <h4>{value}</h4>}
    </Col>
  </Row>
);

export default ModalRow;
