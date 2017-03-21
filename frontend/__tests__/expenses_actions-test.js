/* globals jest */

jest.mock('react-router');

import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE,
  requestExpenses,
  requestExpense,
  createExpense,
  updateExpense,
  destroyExpense
} from '../actions/expenses_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('expense actions', () => {
  describe('expense constants', () => {
    it('should contain a RECEIVE_EXPENSES constant', () => {
      expect(RECEIVE_EXPENSES).toEqual('RECEIVE_EXPENSES');
    });

    it('should contain a RECEIVE_EXPENSE constant', () => {
      expect(RECEIVE_EXPENSE).toEqual('RECEIVE_EXPENSE');
    });

    it('should contain a REMOVE_EXPENSE constant', () => {
      expect(REMOVE_EXPENSE).toEqual('REMOVE_EXPENSE');
    });
  });

  describe('thunks', () => {
    let ExpenseApiUtil,
        store;

    beforeEach(() => {
      ExpenseApiUtil = require('../util/expenses_api_util');
      store = mockStore({ expenses: {} });
    });

    describe('requestExpenses', () => {
      it('should export a requestExpenses function', () => {
        expect(typeof requestExpenses).toEqual('function');
      });
    });

    describe('requestExpense', () => {
      it('should export a requestExpense function', () => {
        expect(typeof requestExpense).toEqual('function');
      });
    });

    describe('createExpense', () => {
      it('should export a createExpense function', () => {
        expect(typeof createExpense).toEqual('function');
      });
    });

    describe('updateExpense', () => {
      it('should export an updateExpense function', () => {
        expect(typeof updateExpense).toEqual('function');
      });
    });

    describe('destroyExpense', () => {
      it('should export a destroyExpense function', () => {
        expect(typeof updateExpense).toEqual('function');
      });
    });
  });
});
