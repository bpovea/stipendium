# STIPENDIUM APP

This project is a simple ReactJS Web application to compute the total value that an employer uses monthly for each employee, or compute the equivalent gross salary based on an invoice subtotal/total.

## Why

Recently, remote work from other countries has become popular in Ecuador. Proposals usually look very good, but, there are many things that you should take care of. For example, a remote payment of $1500.00 is equivalent to $1100.00 in local gross salary, because many benefits are included on a local contract and should be considered, and usually, most people omit them or they don't know how to calculate it.


## How calculations works

Computation uses as inputs: 
- Gross salary
- Other optional incomes:
  - Bonus
  - Annual base profit
  - Other fixed monthly incomes

The result will be:
- Job's laws discounts:
  - Personal contribution
  - Spouse contribution (if it's necesary)
- Other incomes:
  - Monthly/Provisioned thirteenth salary
  - Monthly/Provisioned fourteenth salary
  - Paid vacations
- Company contributions:
  - Company contribution
  - IECE SECAP contribution
- Net salary
- Cost per employee

Another option, if you are interested in how much represents an invoice value in a local gross salary, you can just set the invoice subtotal or total, and the conversion will be computed.

## Author

Byron Povea [github](https://github.com/bpovea)