// La función `it` se utiliza para escribir un Caso de Prueba concreto o Test Case
// it(cadena que describe el Test Case, callback)
it('New hero should have undefined strength', () => {
    // arrange
    var heroe;

    // act
    heroe = new Heroe();

    // assert
    expect(heroe.strenght).toBeUndefined();
})


// Colección de casos de prueba o Test Suite
// describe(cadena que describe el 'Test Suite', callback)
describe(`${Heroe.name}`, () => {

    // La colección de pruebas debe escribirse como una historia
    // que describe los casos de uso que se están probando
    // de manera clara para cualquiera persona no técnica
    it('should exists', function() {
        // arrange
        let heroe;

        // act
        heroe = new Heroe();

        // assert
        // El `assert` de las 3A es dónde comprobaremos el caso de prueba, en Jasmine
        // estará compuesto por dos partes: 
        // 1- la función `expect` que utilizaremos para pasar el valor a comprobar.
        // 2- la función `matcher` que es dónde pasaremos el valor esperado.
        // Algunos ejemplos de funciones matcher son toBe(), toContain(), toThrow()
        // toEqual(), toBeTruthy(), toBeUndefined() entre otros muchos y además los que podemos
        // crear nosotros mismos. 
        expect(heroe).not.toBeNull();
        // expect(heroe).toBeTruthy();
    });
    
    it('should have a name', function() {
        // arrange
        const heroe = new Heroe();

        // act
        heroe.realName = 'Arya Stark';

        // assert
        expect(heroe.realName).toBe('Arya Stark');  
    });

    it('should be able to have strength of 10', function() {
        // arrange
        const heroe = new Heroe('Arya Stark');

        // act
        heroe.strenght = 10;

        // assert
        expect(heroe.strenght).toEqual(10);  
    });

    describe('when meet a new villain', function(){
        it('should add it as a new enemy', function(){
            // arrange
            heroe = new Heroe('Arya Stark');

            // act
            heroe.addEnemy('Cersei Lannister');

            // assert
            expect(heroe.enemies.length).toEqual(1);              
        });

        it('should add the villian name into it list', function(){
            // arrange
            heroe = new Heroe('Arya Stark');

            // act
            heroe.addEnemy('Cersei Lannister');

            // assert
            expect(heroe.enemies).toContain('Cersei Lannister');              
        });

    });
});
