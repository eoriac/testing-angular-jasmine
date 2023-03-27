describe(`${City.name}`, () => {
    let modelUnderTest;
    let mockWheaterService;

    beforeEach(() => {
        // Stubs
        mockWheaterService = jasmine.createSpyObj('MockWeatherService', ['getWeatherInfo']);
        modelUnderTest = new City('Valencia', mockWheaterService);
    });

    afterEach(() => {
        modelUnderTest = null;
    })

    it('should get a weather info', () => {
        //arrange
        

        //act
        modelUnderTest.getWeatherInfo();

        //assert
        //expect(window.alert).toHaveBeenCalled();
        expect(mockWheaterService.getWeatherInfo).toHaveBeenCalledWith(modelUnderTest.cityName);
    });
});