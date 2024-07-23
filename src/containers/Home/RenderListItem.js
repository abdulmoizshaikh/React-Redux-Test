import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import utils from '../../services/utils';
import { NavLink } from 'react-bootstrap';

const RenderListItem = (props) => {
  const { user, onClickListItem } = props;
  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col xs={6} md={4}>
          <Image src={user?.avatar_url} thumbnail width={100} height={100} />
        </Col>

        <Col xs={6} md={4} onClick={() => onClickListItem(user)}>
          <NavLink>
            <h5>{utils.capitalizeFirstLetter(user.login)}</h5>
          </NavLink>
        </Col>

        <Col xs={6} md={4}>
          {user.login && (
            <NavLink href={`https://github.com/${user.login}`} target="_blank">
              GitHub Profile Link
            </NavLink>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
export default RenderListItem;
