const Thing = require('../thing');

describe('is an thing', () => {
  it('valid model', () => {
    const data = {
      name: 'Jhonny Depp',
      dob: 'March 23rd 1957',
      pob: 'Pittsburg, PA',
      films: []
    };

    const thing = new Thing(data);

    const errors = thing.validateSync();
    expect(errors).toBeUndefined();

    const json = thing.toJSON();
    expect(json).toEqual({
      ...data,
      _id: expect.any(Object),
      films: [],
    });
  });

  it('invalid model', () => {
    const data = {
      name: 1973,
      birthYear: 'Stephanie Meyer'
    };
    const thing = new Thing(data);

    const errors = thing.validateSync();
    expect(errors).toBeTruthy();
  });

});