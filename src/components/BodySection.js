import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// state less Component
const BodySection = () => (
    <Container>
        <Row>
            <Col>
                <h3>Contrato Ecuatoriano</h3>
                <p>Aquí irá el form de cálculo Ecuatoriano</p>
            </Col>
            <Col>
                <h3>Contrato Por Facturación</h3>
                <p>Aquí irá el form de cálculo por facturación</p>
            </Col>
        </Row>
    </Container>
);

export default BodySection;