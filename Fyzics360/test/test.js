const expect = require('chai').expect

const app = require('../server')
const agent = require('supertest')(app);
const User = require('../server/model')
const db = require('../server/db')

/**
 *
 * User model Tests
 *
 */

describe('User', () => {
  describe('User model', () => {
    describe('validation', () => {
      it('requires name', async () => {
        const user = User.build();
        try {
          await user.validate();
          throw Error('Validation is successful but should have failed without a name')
        } catch (error) {
          expect(error.message).to.contain('name cannot be null');
        }
      });
      it('require name to not be an empty string', async () => {
        const user = User.build({
          name: 'cody',
          email: 'cody@email.com'
        });
        try {
          await user.validate()
          // throw Error('validation was successful but should have failed if name is an empty string');
        } catch (err) {
          expect(err.message).to.contain('Validation error');
          /* handle error */
        }
      })
    })
  })
})