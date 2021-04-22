import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// state less Component
const WhySection = () => (
    <Container>
        <Row>
            <Col>
                <h2>Por qué?</h2>
                <p>
                    Recientemente el trabajo remoto desde otros países se ha popularizado en Ecuador. Las propuestas suelen verse muy bien, pero, hay varias cosas que
                    se deben tomar en cuenta. Por ejemplo, un salario remoto de $1500,00 es equivalente a un salario bruto local de $1100,00. Esto se debe a que según la
                    ley de trabajo Ecuatoriana existen varios beneficios que son incluidos en el contrato laboral local. Algunos ejemplos son: Décimo tercer sueldo,
                    Décimo cuarto sueldo, Utilidades, etc. Es muy usual que la mayoría de personas desconozcan del tema o simplemente lo omitan y se dejen seducir por
                    un valor que suena mayor, pero resulta ser menor que lo que ganan actualmente.
                </p>
            </Col>
        </Row>
    </Container>
);

export default WhySection;