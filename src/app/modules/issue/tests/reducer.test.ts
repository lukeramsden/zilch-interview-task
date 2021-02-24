import {issueReducer, initialState} from '../reducer';

describe('issueReducer', () => {
  it('should return the initial state', () => {
    const expectedResult = initialState;
    expect(issueReducer(undefined, {type:''})).toEqual(expectedResult);
  });
})
