describe(`${Heroe.name}`, () => {
    let modelUnderTest;

    beforeEach(() => {
        modelUnderTest = new Heroe('Arya Stark', 'Dead Girl');
    });

    afterEach(() => {
        modelUnderTest = null;
    })

    it('should browser alert hero name', () => {
        //arrange
        spyOn(window, 'alert');

        //act
        modelUnderTest.sayMyName();

        //assert
        //expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith(modelUnderTest.realName);
    });
});