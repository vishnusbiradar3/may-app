import checkPropTypes from 'check-prop-types';

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