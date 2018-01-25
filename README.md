[![](https://data.jsdelivr.com/v1/package/npm/mantis-data-store/badge)](https://www.jsdelivr.com/package/npm/mantis-data-store)

# Mantis Data Store for jQuery

A data store for jQuery

## Initialize

Somewhere on your template:

```javascript

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mantis-data-store@0.1.2/lib/index.min.js"></script>

```

Get the instance

var myMantis = MantisDS();

## Push new state into data store

myMantis.push('myName', 'hasan');

## Get your state from data store

myMantis.get('myName');

## Update your state from data store

myMantis.update('myName', 'juki')

## Remove your state from data store

myMantis.remove('myName');
