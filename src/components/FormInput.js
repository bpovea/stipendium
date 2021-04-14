import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaQuestionCircle } from 'react-icons/fa';

import '../styles/FormInput.css'

// state less Component
const FormInput = (props) => {
    const [showHelp, setShowHelp] = useState(false);

    const clickHelp = (e) => {
        setShowHelp(!showHelp);
    };

    return (
        <Form.Group as={Row}>
            <Form.Label column sm="7">
                {props.label} {props.helpText && <FaQuestionCircle onClick={clickHelp} className="help" />}
            </Form.Label>
            <Col sm="3">
                <Form.Control value={props.value} name={props.name} onChange={props.handleOnChange} type={props.type} readOnly={props.readOnly} />
            </Col>
            <Col sm="12">
                {(props.helpText && showHelp) && <Form.Text className="text-muted">{props.helpText}</Form.Text>}
            </Col>
        </Form.Group>
    )
};

export default FormInput;