# Mantis Data Store for jQuery

A data store for jQuery

## Push new state into data store

var myMantis = MantisDS();

myMantis.push('myName', 'hasan');

## Get your state from data store

myMantis.get('myName');

## Update your state from data store

myMantis.update('myName', 'juki')

## Remove your state from data store

myMantis.remove('myName');
