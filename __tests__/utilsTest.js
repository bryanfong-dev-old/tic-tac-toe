import checkWinner from '../src/utils/checkWinner';
import cpuNextMove from '../src/utils/cpuNextMove';

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

  describe('CPU Next Move Function', () => {
    it('should place the first move on square 4 if it is empty', () => {
      expect(cpuNextMove(['', '', '', '', '', '', '', '', ''])).toBe(4);
      expect(cpuNextMove(['O', '', '', '', '', '', '', '', ''])).toBe(4);
      expect(cpuNextMove(['', 'O', '', '', '', '', '', '', ''])).toBe(4);
    })

    it('should return the index to block player from winning', () => {
      expect(cpuNextMove(['O', '', 'O', '', '', '', '', '', ''])).toBe(1);
      expect(cpuNextMove(['', 'O', '', 'O', '', 'O', '', '', ''])).toBe(4);
      expect(cpuNextMove(['O', '', '', 'O', '', '', '', '', ''])).toBe(6);
      expect(cpuNextMove(['O', '', '', '', 'O', '', '', '', ''])).toBe(8);
      expect(cpuNextMove(['O', 'X', 'O', '', '', 'O', '', '', ''])).toBe(8);
    })

    it('should return the index return the winning slot', () => {
      expect(cpuNextMove(['', 'X', 'X', '', '', '', '', '', ''])).toBe(0);
      expect(cpuNextMove(['', '', '', '', 'X', '', '', '', 'X'])).toBe(0);
      expect(cpuNextMove(['', '', '', '', 'X', 'X', '', '', ''])).toBe(3);
      expect(cpuNextMove(['', 'X', '', '', 'X', '', '', '', ''])).toBe(7);
      expect(cpuNextMove(['X', 'O', 'X', '', '', 'X', '', '', ''])).toBe(8);
    })

    it('should win instead of blocking the player if possible', () => {
      expect(cpuNextMove(['O', 'X', 'O', '', '', 'O', '', 'X', ''])).toBe(4);
      expect(cpuNextMove(['O', '', 'O', 'X', 'X', '', '', '', ''])).toBe(5);
      expect(cpuNextMove(['O', '', 'X', '', 'O', '', '', '', 'X'])).toBe(5);
      expect(cpuNextMove(['O', 'X', '', 'O', 'X', '', '', '', ''])).toBe(7);
      expect(cpuNextMove(['', 'O', '', 'O', '', 'O', 'X', 'X', ''])).toBe(8);
    })
  })


})