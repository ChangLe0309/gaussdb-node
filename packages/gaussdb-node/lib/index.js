'use strict'

const Client = require('./client')
const defaults = require('./defaults')
const Connection = require('./connection')
const Result = require('./result')
const utils = require('./utils')
const Pool = require('gaussdb-pool')
const TypeOverrides = require('./type-overrides')
const { DatabaseError } = require('gaussdb-protocol')
const { escapeIdentifier, escapeLiteral } = require('./utils')

const poolFactory = (Client) => {
  return class BoundPool extends Pool {
    constructor(options) {
      super(options, Client)
    }
  }
}

const GAUSSDB = function (clientConstructor) {
  this.defaults = defaults
  this.Client = clientConstructor
  this.Query = this.Client.Query
  this.Pool = poolFactory(this.Client)
  this._pools = []
  this.Connection = Connection
  this.types = require('pg-types')
  this.DatabaseError = DatabaseError
  this.TypeOverrides = TypeOverrides
  this.escapeIdentifier = escapeIdentifier
  this.escapeLiteral = escapeLiteral
  this.Result = Result
  this.utils = utils
}

// Native bindings are no longer supported
module.exports = new GAUSSDB(Client)
