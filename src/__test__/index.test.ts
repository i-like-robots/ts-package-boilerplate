import { foo } from '../index'

describe('src/index', () => {
  describe('#foo', () => {
    it('does this', () => {
      expect(foo(true)).toBe(true)
    })
    it('does not do this', () => {
      expect(foo(false)).not.toBe(true)
    })
  })
})
