import successReducer from "../../../../componets/jotto/reducers/successReducer";
import { actionType } from "../../../../componets/jotto/actions";


test('when previouse state undfine return false', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});
test('return previous state when unknown action type', () => {
    const newState = successReducer(false, { type: 'unknown' });
    expect(newState).toBe(false);
});
test('return `true` for action type CORRECT_GUESS', () => {
    const newState = successReducer(false, { type: actionType.CORRECT_GUESS });
    expect(newState).toBe(true);
});

