import moxios from 'moxios';
import { getScretWord, correctGuess, actionType } from '../../../../componets/jotto/actions';
describe('correctGuess', () => {
    test('return an action with type `CORRECT_GUSES', () => {
        const action = correctGuess();
        expect(action).toStrictEqual({type: actionType.CORRECT_GUESS});
    });

});


describe('getDecretWord', () => {
    beforeEach(() => {
        moxios.install();
    })
    afterEach(() => {
        moxios.uninstall();
    })
    test('secretWord is returned', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party',
            })
        });
        //update to test app in redux /context sections
        return getScretWord().then((secretWord) => {
            expect(secretWord).toBe('party');

        })
    });

});
