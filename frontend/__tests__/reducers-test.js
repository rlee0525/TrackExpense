/* globals jest */

import ExpensesReducer from '../reducers/expenses_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('ExpensesReducer', () => {
    it('exports an function', () => {
      expect(typeof ExpensesReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ExpensesReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ExpensesReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_EXPENSES action', () => {
      let action,
          fakeExpenses;

      beforeEach(() => {
        fakeExpenses = { 1: 'fakeExpense1', 2: 'fakeExpense2' };
        action = {
          type: 'RECEIVE_EXPENSES',
          expenses: fakeExpenses
        };
      });

      it('should replace the state with the action\'s expenses', () => {
        const state = ExpensesReducer(undefined, action);
        expect(state).toEqual(fakeExpenses);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        ExpensesReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_EXPENSE action', () => {
      let action,
          fakeExpense;

      beforeEach(() => {
        fakeExpense = { id: 1, title: 'fakeExpense' };
        action = {
          type: 'RECEIVE_EXPENSE',
          expense: fakeExpense
        };
      });

      it('should add the expense to the state using the expense id as a key', () => {
        let state = ExpensesReducer(undefined, action);
        expect(state[1]).toEqual(fakeExpense);
      });

      it('should not affect the other expenses in the state', () => {
        let oldState = { 2: 'oldState' };
        let state = ExpensesReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });

    describe('handling the REMOVE_EXPENSE action', () => {
      let action,
          fakeExpense;

      beforeEach(() => {
        fakeExpense = { id: 1, title: 'fakeExpense' };
        action = {
          type: 'REMOVE_EXPENSE',
          expense: fakeExpense
        };
      });

      it('should remove the correct expense from the state', () => {
        let state = ExpensesReducer({ 1: fakeExpense }, action);
        expect(typeof state[1]).toEqual('undefined');
      });

      it('should not affect the other expenses in the state', () => {
        let oldState = { 1: fakeExpense, 2: 'oldState' };
        let state = ExpensesReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });
  });

  describe('RootReducer', () => {
    let fakeStore;

    beforeAll(() => {
      fakeStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the ExpensesReducer under the key `expenses`', () => {
      const expense = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_EXPENSE', expense };
      fakeStore.dispatch(action);

      expect(fakeStore.getState().expenses).toEqual(ExpensesReducer({ [expense.id]: expense }, action));
    });
  });

});
