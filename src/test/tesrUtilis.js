import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../componets/jotto/reducers';

export const storeFactory =(initialState)=>{

    return createStore(rootReducer,initialState);
}

export const findByTestAttr = (wrapper,val)=>{
    return wrapper.find(val);
};

export const checkProp =(component,conformingProps)=>{
    const propsError=checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propsError).toBeUndefined();
}