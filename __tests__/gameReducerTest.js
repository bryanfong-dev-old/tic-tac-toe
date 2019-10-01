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

  describe('PLACE MARKER - player\'s turn', () => {
    const action = {
      type: 'PLACE_MARKER',
      payload: 0,
    }

    it('should change turn to X', () => {
      const { turn } = gameReducer(state, action)
      expect(turn).toEqual('X')
    })

    it('should add an O marker to the zeroth index', () => {
      const { board } = gameReducer(state, action)
      expect(board).toEqual(['O', '', '', '', '', '', '', '', ''])
    })

    it('should increase the moves counter by 1', () => {
      const oldCount = state.moves;
      const { moves } = gameReducer(state, action)
      expect(moves).toBe(oldCount + 1);
    })
  })

  describe('PLACE MARKER - computer\'s turn', () => {

    beforeEach(() => {
      state = {
        board: ['O', '', '', '', '', '', '', '', ''],
        active: true,
        turn: 'X',
        winner: '',
        moves: 1,
        p1_score: 0,
        cpu_score: 0
      }
    });

    let action = {
      type: 'PLACE_MARKER',
      payload: 1,
    }

    it('should change turn to O', () => {
      const { turn } = gameReducer(state, action)
      expect(turn).toEqual('O')
    })

    it('should add an X marker to the zeroth index', () => {
      const { board } = gameReducer(state, action)
      expect(board).toEqual(['O', 'X', '', '', '', '', '', '', ''])
    })

    it('should increase the moves counter by 1', () => {
      const oldCount = state.moves;
      const { moves } = gameReducer(state, action)
      expect(moves).toBe(oldCount + 1);
    })
  })

  describe('PLACE MARKER - on filled spot', () => {
    beforeEach(() => {
      state = {
        board: ['O', '', '', '', '', '', '', '', ''],
        active: true,
        turn: 'X',
        winner: '',
        moves: 1,
        p1_score: 0,
        cpu_score: 0
      }
    });

    let action = {
      type: 'PLACE_MARKER',
      payload: 0,
    }

    it('should not switch the turn to O', () => {
      const { turn } = gameReducer(state, action)
      expect(turn).toEqual('X')
    })

    it('should not add any element to the board', () => {
      const { board } = gameReducer(state, action)
      expect(board).toEqual(['O', '', '', '', '', '', '', '', ''])
    })

    it('should not increase the moves counter by 1', () => {
      const oldCount = state.moves;
      const { moves } = gameReducer(state, action)
      expect(moves).toBe(oldCount);
    })
  })

  describe('CHECK FOR WINNER - CPU', () => {
    const action = {
      type: 'DECLARE_WINNER',
      payload: 'X'
    }

    it('should set the winner to be X', () => {
      const { winner } = gameReducer(state, action)
      expect(winner).toBe('X');
    })

    it('should increase CPU score by 1 if X wins', () => {
      const oldcpuScore = state.cpu_score;
      const { cpu_score } = gameReducer(state, action)
      expect(cpu_score).toBe(oldcpuScore + 1);
    })

    it('should set game to inactive when X wins', () => {
      const { active } = gameReducer(state, action)
      expect(active).toBe(false);
    })

  });

  describe('CHECK FOR WINNER - PLAYER', () => {
    const action = {
      type: 'DECLARE_WINNER',
      payload: 'O'
    }

    it('should set the winner to be O', () => {
      const { winner } = gameReducer(state, action)
      expect(winner).toBe('O');
    })

    it('should increase CPU score by 1 if O wins', () => {
      const oldp1Score = state.p1_score;
      const { p1_score } = gameReducer(state, action)
      expect(p1_score).toBe(oldp1Score + 1);
    })

    it('should set game to inactive when O wins', () => {
      const { active } = gameReducer(state, action)
      expect(active).toBe(false);
    })
  });

  describe('CHECK FOR DRAW', () => {
    const action = {
      type: 'DECLARE_WINNER',
      payload: ''
    }

    it('should not change state if no winner', () => {
      expect(gameReducer(state, action)).toEqual(state);
    })
  })

  describe('CHECK FOR DRAW', () => {
    beforeEach(() => {
      state = {
        active: true,
        winner: '',
        moves: 9,
      }
    });

    const action = {
      type: 'CHECK_FOR_DRAW'
    }

    it('should set the winner to tie', () => {
      const { winner } = gameReducer(state, action)
      expect(winner).toBe('Tie');
    })

    it('should make the game inactive if tie', () => {
      const { active } = gameReducer(state, action)
      expect(active).toBe(false);
    })
  })

  describe('NEW GAME', () => {
    beforeEach(() => {
      state = {
        board: ['X', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O'],
        active: false,
        turn: 'X',
        winner: 'X',
        moves: 9,
        p1_score: 1,
        cpu_score: 0
      }
    });

    const action = {
      type: 'NEW_GAME'
    }

    it('should reset state', () => {
      const { board, active, turn, winner, moves, p1_score, cpu_score } = gameReducer(state, action)
      const oldp1Score = state.p1_score;
      const oldcpuScore = state.cpu_score;
      expect(board).toEqual(['', '', '', '', '', '', '', '', '']);
      expect(active).toBe(true);
      expect(turn).toBe('O');
      expect(winner).toBe('');
      expect(moves).toBe(0);
      expect(p1_score).toBe(oldp1Score);
      expect(cpu_score).toBe(oldcpuScore);
    })
  })
})