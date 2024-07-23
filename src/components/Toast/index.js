import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './styles.css';

function ToastComp(props) {
  const { show, err, onCloseToast, variant } = props;

  return (
    <ToastContainer position={'top-end'} id="toast-container">
      <Toast
        className="d-inline-block m-1"
        onClose={onCloseToast}
        show={show}
        delay={3000}
        autohide={true}
        bg={variant || 'danger'}
      >
        <Toast.Header>
          <strong className="me-auto">Something went wrong!</strong>
        </Toast.Header>
        <Toast.Body>{err?.message}.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastComp;
