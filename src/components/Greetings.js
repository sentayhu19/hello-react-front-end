import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../redux/greetings/greetings';

const Greetings = () => {
  const { greetings, loading } = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  }, []);
  if (loading === true && greetings === null) {
    return <div>LOADING...</div>;
  }
  if (loading === false) {
    const array = Object.keys(greetings)
      .map((key) => greetings[key]);
    return (
      <div className="greetings-wrap">
        <h1>{array[1]}</h1>
        <button onClick={() => dispatch(getDataAPI())} type="button">Get Greeting</button>

      </div>
    );
  }
  return '';
};

export default Greetings;
