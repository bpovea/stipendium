import React, { useState, Fragment } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormInput from './FormInput';

const InvoicedContract = () => {
    // inputs
    const [data, setData] = useState({
        invoiceSubtotal: 0,
        annualBaseProfit: 0,
    });

    const [showResults, setShowResults] = useState(false);

    const bankTax = -50;

    // outputs
    const [result, setResult] = useState({
        retention: 0,
        iva: 0,
        invoiceTotal: 0,
        netIncome: 0,
        grossSalary: 0,
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
        let retention = -data.invoiceSubtotal * 0.1;
        let iva = data.invoiceSubtotal * 0.12;
        let invoiceTotal = data.invoiceSubtotal + iva + retention;
        let netIncome = data.invoiceSubtotal + retention;
        let netOutIncome = netIncome + bankTax;
        let grossSalary = ((data.invoiceSubtotal + iva) - (33.33) - (0.83 * data.annualBaseProfit)) / 1.2045;
        setResult({
            ...result,
            retention: retention,
            iva: iva,
            invoiceTotal: invoiceTotal,
            netIncome: netIncome,
            netOutIncome: netOutIncome,
            grossSalary: (grossSalary).toFixed(2),
        });
    };

    return (
        <Fragment>
            <Form onSubmit={computeTotals}>
                <FormInput
                    label='Subtotal Factura' name='invoiceSubtotal' type="number"
                    helpText="Valor de la factura antes de los descuento de retención e IVA."
                    value={data.invoiceSubtotal} handleOnChange={handleInputChange} />
                <FormInput
                    label='Base de Utilidad Anual' name='annualBaseProfit' type="number"
                    helpText="Este valor será considerado en el cálculo del estimado salario bruto con contrato Ecuatoriano. NO ES OTRO VALOR DE INGRESO."
                    value={data.annualBaseProfit} handleOnChange={handleInputChange} />
                <Button variant="primary" type="submit" >
                    Calcular
                </Button>
            </Form>
            {showResults &&
                <Fragment>
                    <FormInput
                        label='Retención 10%' name='retention' type="number"
                        helpText="Es el porcentaje que usualmente se retiene por servicios prestados, podría variar dependiendo de la actividad."
                        value={result.retention} readOnly={true} />
                    <FormInput
                        label='IVA 12%' name='iva' type="number"
                        value={result.iva} readOnly={true} />
                    <FormInput
                        label='Total Factura' name='invoiceTotal' type="number"
                        value={result.invoiceTotal} readOnly={true} />
                    <FormInput
                        label='Ingreso Neto Local' name='netIncome' type="number"
                        helpText="Es el subtotal de la factura - retención. El IVA es adicional, pero no se considera como ingreso neto, porque debe ser declarado"
                        value={result.netIncome} readOnly={true} />
                    <FormInput
                        label='Comisión del Banco' name='bankTax' type="number"
                        helpText="Es el valor fijo de comisión por transferencias internacionales."
                        value={bankTax} readOnly={true} />
                    <FormInput
                        label='Ingreso Neto Desde el Extranjero' name='netOutIncome' type="number"
                        value={result.netOutIncome} readOnly={true} />
                    <FormInput
                        label='Equivalente Salario Bruto*' name='grossSalary' type="number"
                        value={result.grossSalary} readOnly={true} />
                    <p>
                        *Este valor es el equivalente al valor de oferta salarial en Ecuador. Se asume también que se cobrará el IVA como adicional,
                        una utilidad anual de ${data.annualBaseProfit}, afiliación sobre este salario, decimos por ley y sin fondo de reserva (se empieza a percibir pasado un año).
                    </p>
                </Fragment>
            }
        </Fragment>
    )
};

export default InvoicedContract;