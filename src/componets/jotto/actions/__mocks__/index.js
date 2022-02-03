module.exports ={
    ...jest.requireActual('..'),
    __esModule: true,
    //TDD Update return value for redux / context implemattionn
    getScretWord: jest.fn().mockReturnValue(Promise.resolve('party'))
}