const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Animal = require('../models/animal');

describe('Animal Model', () => {
  it('should create a new animal', (done) => {
    const AnimalMock = sinon.mock(new Animal(
      {
        species: 'test',
        race: 'test',
        size: 30,
        weight: 30,
        description: 'test',
      }));
    const animal = AnimalMock.object;

    AnimalMock
      .expects('save')
      .yields(null);

    animal.save((err) => {
      AnimalMock.verify();
      AnimalMock.restore();
      expect(err).to.be.null;
      done();
    });
  });
});
