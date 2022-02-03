import { getLetterMatchCount } from "../../../componets/helpers";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    })

    test('returns the correct count when tere are three matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    })

    test('returns the coreect count when there are duplicate letters in the guess ', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);

    })

});