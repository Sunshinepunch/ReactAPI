import headlinesReducer from '../../reducers/headlines-reducer';
import * as c from './../../actions/ActionTypes';


describe('headlinesReducer', () => {


  let action;

  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
    headlines: [],
    error: null
  };

  test('should return default state without action being passed', () => {
    expect(headlinesReducer(defaultState, {type: null})).toEqual ({
      isLoading: false,
      headlines: [],
      error: null
    }
    );
  });

  test('requesting headlines should change IsLoading from false to true', () => {
    action = {
      type: c.REQUEST_HEADLINES
    };

    expect(headlinesReducer(defaultState, action)).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    });
  })

  test('getting headlines should change IsLoading to false and update headlings', () => {
    const headlines = "A headline";
    action = {
      type: c.GET_HEADLINES_SUCCESS,
      headlines
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: "A headline",
      error: null
    });
  });

  test('failing to get headlines should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_HEADLINES_FAILURE,
      error
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
        isLoading: false,
        headlines: [],
        error: "An error"
    });
  });
});