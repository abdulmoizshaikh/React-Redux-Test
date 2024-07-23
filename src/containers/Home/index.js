import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalComp, SearchBox } from '../../components';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserActions } from '../../store/actions';
import './index.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import utils from '../../services/utils';
import { NavLink } from 'react-bootstrap';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(UserActions.fetchGithubUsers());
  }, []);

  const onSearch = (username) => {
    if (typeof username === 'string' && username.trim().length === 0) {
      dispatch(UserActions.fetchGithubUsers());
    } else {
      dispatch(UserActions.searchGithubUserByName({ username }));
    }
  };

  const onClickListItem = (user) => {
    setModalShow(true);
    setActiveUser(user);
  };

  return (
    <div id="container">
      <h1 className="center-text">GitHub Users</h1>
      <br />
      <SearchBox onSearch={onSearch} />

      {isLoading ? (
        <div className="center-align">
          <p> Loading...</p>
        </div>
      ) : (
        <ListGroup>
          {users?.length
            ? users.map((user, i) => {
                return (
                  <ListGroup.Item key={i}>
                    <Row>
                      <Col xs={6} md={4}>
                        <Image
                          src={user?.avatar_url}
                          thumbnail
                          width={100}
                          height={100}
                        />
                      </Col>

                      <Col xs={6} md={4} onClick={() => onClickListItem(user)}>
                        <NavLink>
                          <h5>{utils.capitalizeFirstLetter(user.login)}</h5>
                        </NavLink>
                      </Col>
                      <Col xs={6} md={4}>
                        {user.login && (
                          <NavLink
                            href={`https://github.com/${user.login}`}
                            target="_blank"
                          >
                            GitHub Profile Link
                          </NavLink>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      )}

      <ModalComp
        user={activeUser}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Home;
