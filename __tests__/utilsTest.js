import checkWinner from '../src/utils/checkWinner';

describe('Utility Functions', () => {

  describe('Check Winner Function', () => {

    it('should return false if not a winning board', () => {
      expect(checkWinner(['', '', '', '', '', '', '', '', ''])).toBe(false);
      expect(checkWinner(['', '', 'X', 'X', 'X', '', '', '', ''])).toBe(false);
      expect(checkWinner(['', '', 'X', 'X', 'X', 'O', 'O', 'O', ''])).toBe(false);
      expect(checkWinner(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O'])).toBe(false);
    })

    it('should return X if X has a winning board', () => {
      expect(checkWinner(['X', 'X', 'X', '', '', '', '', '', ''])).toBe('X');
      expect(checkWinner(['O', '', 'O', 'X', 'X', 'X', 'O', '', ''])).toBe('X');
      expect(checkWinner(['X', '', 'O', 'X', 'O', 'O', 'X', '', ''])).toBe('X');
      expect(checkWinner(['X', 'O', '', '', 'X', '', 'O', 'O', 'X'])).toBe('X');
    })

    it('should return O if O has a winning board', () => {
      expect(checkWinner(['O', 'O', 'O', '', '', '', '', '', ''])).toBe('O');
      expect(checkWinner(['X', '', 'X', 'O', 'O', 'O', 'X', '', ''])).toBe('O');
      expect(checkWinner(['O', '', 'X', 'O', 'X', 'X', 'O', '', ''])).toBe('O');
      expect(checkWinner(['O', 'O', '', '', 'O', '', 'X', 'X', 'O'])).toBe('O');
    })

  })

})