/* globals jest */

import {
  fetchExpense,
  fetchExpenses,
  destroyExpense,
  updateExpense,
  createExpense
} from '../util/expenses_api_util';

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchExpenses makes request and returns an ajax promise', () => {
    const returnValue = fetchExpenses();
    expect($.ajax).toBeCalled();

    // This line gets the first argument of the first call to $.ajax
    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/expenses');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchExpense makes request and returns an ajax promise', () => {
    const returnValue = fetchExpense(15);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/expenses/15');
    expect(returnValue).toEqual("ajax promise");
  });

  it('createExpense makes request and returns an ajax promise', () => {
    const expense = { title: 'New Expense', body: 'Content' };
    const returnValue = createExpense(expense);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/expenses');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch("POST");
    expect(ajaxCallArg.data).toEqual({ expense });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateExpense makes request and returns an ajax promise', () => {
    const expense = { id: 15, title: 'Existing Expense', body: 'Content' };
    const returnValue = updateExpense(expense);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/expenses/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ expense });
    expect(returnValue).toEqual("ajax promise");
  });

  it('destroyExpense makes request and returns an ajax promise', () => {
    const returnValue = destroyExpense(15);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('/api/expenses/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch("DELETE");
    expect(returnValue).toEqual("ajax promise");
  });
});
