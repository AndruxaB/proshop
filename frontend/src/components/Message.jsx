import { Alert } from 'react-bootstrap';

export default function Message({ variant, message }) {
    return <Alert variant={variant}>{message}</Alert>;
}

Message.defaultProps = {
    variant: 'info',
};
