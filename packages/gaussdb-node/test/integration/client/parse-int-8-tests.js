'use strict'

// const helper = require('../test-helper')
// const gaussdb = helper.gaussdb
// const suite = new helper.Suite()
// const assert = require('assert')

// SKIP: 不支持 临时表Serial
// https://github.com/HuaweiCloudDeveloper/gaussdb-drivers/blob/master-dev/diff-gaussdb-postgres.md#%E4%B8%8D%E6%94%AF%E6%8C%81-%E4%B8%B4%E6%97%B6%E8%A1%A8serial

/*
const pool = new gaussdb.Pool(helper.config)
suite.test('ability to turn on and off parser', function () {
  if (helper.args.binary) return false
  pool.connect(
    assert.success(function (client, done) {
      gaussdb.defaults.parseInt8 = true
      client.query('CREATE TEMP TABLE asdf(id SERIAL PRIMARY KEY)')
      client.query(
        'SELECT COUNT(*) as "count", \'{1,2,3}\'::bigint[] as array FROM asdf',
        assert.success(function (res) {
          assert.strictEqual(0, res.rows[0].count)
          assert.strictEqual(1, res.rows[0].array[0])
          assert.strictEqual(2, res.rows[0].array[1])
          assert.strictEqual(3, res.rows[0].array[2])
          gaussdb.defaults.parseInt8 = false
          client.query(
            'SELECT COUNT(*) as "count", \'{1,2,3}\'::bigint[] as array FROM asdf',
            assert.success(function (res) {
              done()
              assert.strictEqual('0', res.rows[0].count)
              assert.strictEqual('1', res.rows[0].array[0])
              assert.strictEqual('2', res.rows[0].array[1])
              assert.strictEqual('3', res.rows[0].array[2])
              pool.end()
            })
          )
        })
      )
    })
  )
})
*/
