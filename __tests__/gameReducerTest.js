import gameReducer from '../src/reducers/gameReducer';

describe('Game Reducers', () => {
  let state;

  beforeEach(() => {
    state = {
      board: ['', '', '', '', '', '', '', '', ''],
      active: true,
      turn: 'O',
      winner: '',
      moves: 0,
      p1_score: 0,
      cpu_score: 0,
    }
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(gameReducer(undefined, { type: undefined })).toEqual(state);
    })
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'jkasndklasdaskl' };
      expect(gameReducer(state, action)).toBe(state);
    });
  });
})