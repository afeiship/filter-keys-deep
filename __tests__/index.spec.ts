import filterKeysDeep from '../src';

describe('api.basic', () => {
  test('should filter keys', () => {
    const obj = {
      name: "Alice",
      is_editing: true,
      details: {
        age: 30,
        hobbies: [{ name: "reading", type: "indoor" }],
        is_editing: true,
      },
      data: [1, 2, { x: 10, y: 20, is_editing: false }],
    };
    const ignoreKeys = ['is_editing'];
    const result = filterKeysDeep(obj, ignoreKeys);
    expect(result).toEqual({
      name: "Alice",
      details: {
        age: 30,
        hobbies: [{ name: "reading", type: "indoor" }],
      },
      data: [1, 2, { x: 10, y: 20 }],
    });
  });
});
