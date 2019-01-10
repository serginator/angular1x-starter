/*global describe, it, expect, beforeEach, afterEach */
describe('suite test', () => {
  afterEach(() => {
    console.log('cleaning tests');
  });
  it('first test', () => {
    const a = 'test';
    expect(a).toBeDefined();
  });
});
