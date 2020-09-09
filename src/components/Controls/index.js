import React from 'react';
import { useDispatch } from 'react-redux';

import { randomFirstColor, randomLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={() => {
          dispatch(randomFirstColor(randomHexColor()));
        }}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          dispatch(randomFirstColor(randomHexColor()));
          dispatch(randomLastColor(randomHexColor()));
        }}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={() => {
          dispatch(randomLastColor(randomHexColor()));
        }}
      >
        Random Last
      </button>
    </div>
  );
};
export default Controls;
