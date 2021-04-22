# STIPENDIUM APP

This project is a simple ReactJS Web application to compute the total value that an employer uses monthly for each employee, or compute the equivalent ecuadorian gross salary based on an invoice subtotal/total.

## Why

Recently, remote work from other countries has become popular in Ecuador. Proposals usually look very good, but, there are many things that you should take care of. For example, a remote payment of $1500.00 is equivalent to $1100.00 in local gross salary, because many benefits are included on a local contract and should be considered, and usually, most people omit them or they don't know how to calculate it.

## Live Preview

click [HERE](https://stipendium.bycarga.com)

![preview](https://drive.google.com/uc?export=view&id=1DgiwsHZq-OqFNA-l1dJMuAko11Sxv8sp)

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

Another option, if you are interested in how much represents an invoice value in ecuadorian gross salary, you can just set the invoice subtotal, and the conversion will be computed.

## Github Actions

This project uses [Github Actions](https://docs.github.com/en/actions) to automate updating server on each pull, this is taking advantage of [run-ssh-command](https://github.com/marketplace/actions/run-ssh-command) action in Marketplace.

You can see the acction code on: *.github/workflows/update-action.yml*.

the bash code on server is:

```
#!/usr/bin/env bash

cd /path/to/my/project
git pull --rebase

# Store files changed files 
changedFiles="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"
# Search for coincidence by specific filename stored in $1
checkForChangedFiles() {
    echo "$changedFiles" | grep --quiet "$1" && eval "$2"
}
# If change is detected, install to refresh dependencies
packageJsonHasChanged() {
  echo "Changes to package.json detected, installing updates"
  npm install
}

checkForChangedFiles package.json packageJsonHasChanged

# Stop stipendium service if it's running
node_process_id=$(pidof node)
echo $node_process_id
if [[ ! -z $node_process_id  ]];
  then
    service stipendium stop
fi

# Run again service
service stipendium start
``` 
Initially, the app was executed using (npm start &) to run in the background, but it causes a nonstop Github Action, to fix that, I improve the running of the web app by creating a new [service](https://medium.com/@alexeybaryshnikov/how-to-start-node-js-projects-as-service-without-docker-8a04f8a8b469):

```
[Unit]
Description = My Web App

[Service]
ExecStart=/usr/bin/npm run start --prefix /path/to/my/project
Restart=always

[Install]
WantedBy=multi-user.target
```


## SSL certificate

The SSL certificate was installed using Free [lets-encrypt cerbot](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx) on a Ubuntu 20.04 server with NGINX like a [reverse proxy](https://www.scaleway.com/en/docs/how-to-configure-nginx-reverse-proxy/).

## Author

Byron Povea [github](https://github.com/bpovea), personal web page click [here](https://bpovea.github.io/index.html)