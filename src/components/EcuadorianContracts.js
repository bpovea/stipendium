import React, { Fragment, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormInput from './FormInput';

const EcuadorianContract = () => {

    // inputs
    const [data, setData] = useState({
        grossSalary: 0,
        noTaxableIncomes: 0,
        taxableIncomes: 0,
        annualBaseProfit: 0,
    });

    const [showResults, setShowResults] = useState(false);

    // outputs
    const [result, setResult] = useState({
        // discounts
        personalContribution: 0,
        // benefits
        thirteenthSalary: 0,
        fourteenthSalary: 400,
        // company contributions
        companyContribution: 0,
        ieceSecap: 0,
        // others
        netSalary: 0,
        finalCost: 0
    });

    const handleInputChange = (e) => {
        let value = e.target.value ? parseFloat(e.target.value) : ''
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const computeTotals = (e) => {
        e.preventDefault();
        setShowResults(true);
        let base = parseFloat(data.grossSalary + data.taxableIncomes);
        let companyContribution = base * 0.1115;
        let ieceSecap = base * 0.01
        let personalContribution = base * -0.0945
        let otherIncomes = data.noTaxableIncomes + (data.annualBaseProfit / 12)
        let netSalary = (base + personalContribution).toFixed(2)
        let finalCost = (base + (base / 12) +
            (result.fourteenthSalary / 12) +
            companyContribution +
            ieceSecap +
            otherIncomes).toFixed(2)
        setResult({
            ...result,
            'personalContribution': personalContribution,
            'thirteenthSalary': base,
            'companyContribution': companyContribution,
            'ieceSecap': ieceSecap,
            'netSalary': netSalary,
            'finalCost': finalCost
        });
    };

    return (
        <Fragment>
            <Form onSubmit={computeTotals}>
                <FormInput
                    label='Salario Bruto' name='grossSalary' type="number"
                    helpText="Usualmente es el valor por el que es contratado sin descuentos."
                    value={data.grossSalary} handleOnChange={handleInputChange} />
                <FormInput
                    label='Otros Ingresos Gravables' name='taxableIncomes' type="number"
                    helpText="Ejem. bonos variables, comisiones, etc."
                    value={data.taxableIncomes} handleOnChange={handleInputChange} />
                <FormInput
                    label='Otros Ingresos NO Gravables' name='noTaxableIncomes' type="number"
                    helpText="Ejem. alimentación, viáticos, etc."
                    value={data.noTaxableIncomes} handleOnChange={handleInputChange} />
                <FormInput
                    label='Base de Utilidad Anual' name='annualBaseProfit' type="number"
                    value={data.annualBaseProfit} handleOnChange={handleInputChange} />
                <Button variant="primary" type="submit" >
                    Calcular
                </Button>
            </Form>
            {showResults &&
                <Fragment>
                    <FormInput
                        label='Aporte Personal 9.45%' name='personalContribution' type="number"
                        value={result.personalContribution} readOnly={true} />
                    <FormInput
                        label='Décimo Tercer' name='thirteenthSalary' type="number"
                        value={result.thirteenthSalary} readOnly={true} />
                    <FormInput
                        label='Décimo Cuarto' name='fourteenthSalary' type="number"
                        value={result.fourteenthSalary} readOnly={true} />
                    <FormInput
                        label='Aporte Patronal 11.15%' name='companyContribution' type="number"
                        helpText="Este valor es adicional al sueldo y es pagado completamente por el empleador."
                        value={result.companyContribution} readOnly={true} />
                    <FormInput
                        label='IECE SECAP 1%' name='ieceSecap' type="number"
                        helpText="Este valor es adicional al sueldo y es pagado completamente por el empleador."
                        value={result.ieceSecap} readOnly={true} />
                    <FormInput
                        label='Salario Neto' name='netSalary' type="number"
                        value={result.netSalary} readOnly={true} />
                    <FormInput
                        label='Presupuesto mensual del empleador*' name='finalCost' type="number"
                        value={result.finalCost} readOnly={true} />
                    <p>
                        * Este valor es el equivalente al valor neto** que debería facturarse para que sea equivalente
                        <br></br>
                        ** El valor neto es el subtotal de la factura -IVA y -%Retención
                    </p>
                </Fragment>
            }
        </Fragment>
    );
};

export default EcuadorianContract;
