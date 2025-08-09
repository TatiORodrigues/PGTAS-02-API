const assert = require('assert');
const sum = require('../src/sum');

describe('Função soma', function() {
  it('deve retornar 5 para sum(2, 3)', function() {
    assert.strictEqual(sum(2, 3), 5);
  });
});
