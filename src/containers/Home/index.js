import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalComp, SearchBox } from '../../components';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserActions } from '../../store/actions';
import './index.css';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(UserActions.fetchGithubUsers());
  }, []);

  // need to check this
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
      <h1>Search Github User</h1>
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
                  <ListGroup.Item key={i} onClick={() => onClickListItem(user)}>
                    {user.name || user.login}
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
