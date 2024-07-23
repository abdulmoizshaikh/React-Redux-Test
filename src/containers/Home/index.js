import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, ModalComp, SearchBox, ToastComp } from '../../components';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserActions } from '../../store/actions';
import './styles.css';
import RenderListItem from './RenderListItem';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(UserActions.fetchGithubUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Boolean(error)) setShowToast(true);
  }, [error]);

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

  const onCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div id="container">
      <h1 className="center-text">GitHub Users</h1>
      <br />
      <SearchBox onSearch={onSearch} />

      {isLoading ? (
        <div className="center-align">
          <Loader />
        </div>
      ) : (
        <ListGroup>
          {users?.length
            ? users.map((user, i) => (
                <RenderListItem
                  key={i}
                  user={user}
                  onClickListItem={onClickListItem}
                />
              ))
            : null}
        </ListGroup>
      )}

      <ModalComp
        user={activeUser}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <ToastComp show={showToast} err={error} onCloseToast={onCloseToast} />
    </div>
  );
};

export default Home;
