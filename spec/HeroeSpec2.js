describe(`${Heroe.name}`, function() {

    let heroe = null;
    
    // Se invoca antes de cada test case
    beforeEach(() => {
        heroe = new Heroe('Arya Stark', 'Dead Girl');
        console.log('Before each');
    });

    beforeAll(() => {
        // Se invoca una vez antes de que cualquier casos de prueba en la colección `describe`
        // se vaya a ejecutar
        // Tener en cuenta que puede provocar accidentalmente compartir un estado corrupto entre pruebas
        // porque se ejecuta solo una vez antes cada prueba.
        console.log('Start testing');
    });

    // Se invoca después de cada test case
    afterEach(() => {
        heroe = null;
    });

    afterAll(() => {
        // Se invoca una vez después que todos casos de prueba en la colección `describe`
        // se hayan ejecutado
        // Tener en cuenta que puede traer problemas entre casos de pruebas porque no limpia
        // después cada prueba sino al final.
        console.log('End testing');
    });

    xit('should true be true', () =>{
        expect(true).toBe(true);
    });

    it('should exists', function() {
        // arrange

        // act

        // assert        
        //expect(heroe).toBeTruthy();
        expect(heroe).not.toBeNull();
    });
    
    it('should have a real name', function() {
        // arrange

        // act
        heroe.realName = 'Arya Stark';

        // assert
        expect(heroe.realName).toBe('Arya Stark');  
    });

    it('should be able to have strength of 10', function() {
        // arrange
        

        // act
        heroe.strenght = 10;

        // assert
        expect(heroe.strenght).toEqual(10);  
    });

    // Test suite anidado
    describe('when meet a new villain', function(){
        it('should add it as a new enemy', function(){
            // arrange

            // act
            heroe.addEnemy('Cersei Lannister');

            // assert
            expect(heroe.enemies.length).toEqual(1);              
        });

        it('should add the villian name into it list', function(){
            // arrange

            // act
            heroe.addEnemy('Cersei Lannister');

            // assert
            expect(heroe.enemies).toContain('Cersei Lannister');              
        });
    });
});
