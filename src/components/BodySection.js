import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EcuadorianContract from './EcuadorianContracts';
import InvoicedContract from './InvoicedContracts';

// state less Component
const BodySection = () => (
    <Container>
        <Row>
            <Col>
                <h3>Contrato Ecuatoriano</h3>
                <EcuadorianContract />
            </Col>
            <Col>
                <h3>Contrato Por Facturación</h3>
                <InvoicedContract />
            </Col>
        </Row>
    </Container>
);

export default BodySection;