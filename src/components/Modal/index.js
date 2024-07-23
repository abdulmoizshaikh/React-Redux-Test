import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ModalRow from '../ModalRow';
import utils from '../../services/utils';

function ModalComp(props) {
  const { user } = props;

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ModalRow
            name={'Name'}
            value={utils.capitalizeFirstLetter(user?.login)}
          />
          <ModalRow name={'Followers'} value={user?.followers} />
          <ModalRow name={'Location'} value={user?.location} />
          <ModalRow name={'Picture'} value={user?.avatar_url} isImage />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp;
