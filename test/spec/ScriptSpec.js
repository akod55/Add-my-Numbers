describe("getval", function () {
    it("Retorna el valor numerico apartir nombre del numero deseado", function () {
        var x = getval("Four"); //numero comun
        expect(x).toEqual(4);
    });
});
describe("getval", function () {
    it("Retorna el valor numerico apartir nombre del numero deseado", function () {
        var x = getval("ZERO"); //numero en mayusculas
        expect(x).toEqual(0);
    });
});
describe("getval", function () {
    it("Retorna el valor numerico apartir nombre del numero deseado", function () {
        var x = getval("EiGhtEen");//Mayusculas y minusculas
        expect(x).toEqual(18);
    });
});
describe("getval", function () {
    it("Retorna el valor numerico apartir nombre del numero deseado", function () {
        var x = getval("tuelv");//numero invalido o mal escrito
        expect(x).toEqual(-1);
    });
});
describe("getnum", function () {
    it("Retorna el valor de un string de nombres de numeros concatenados", function () {
        var x = getnum("Four Hundred fourty seven");//Entrada Comun
        expect(x).toEqual(447);
    });
});
describe("getnum", function () {
    it("Retorna el valor de un string de nombres de numeros concatenados", function () {
        var x = getnum("Four Hundred fourty-seven");//entrada con caracter "-"
        expect(x).toEqual(447);
    });
});

describe("getnum", function () {
    it("Retorna el valor de un string de nombres de numeros concatenados", function () {
        var x = getnum("one hundred and ninety");//entrada con la palabra "and"
        expect(x).toEqual(190);
    });
});
describe("getnum", function () {
    it("Retorna el valor de un string de nombres de numeros concatenados", function () {
        var x = getnum("one hundred and nueve");//entrada con un numero erroneo
        expect(x).toEqual(-1);
    });
});
describe("add", function () {
    it("Retorna la suma de dos numeros dados como strigs", function () {
        var x = add("one hundred thirty two","twenty-five");//entrada comun
        expect(x).toEqual(157);
    });
});
describe("add", function () {
    it("Retorna la suma de dos numeros dados como strigs", function () {
        var x = add("zero","zero");
        expect(x).toEqual(0);
    });
});
describe("add", function () {
    it("Retorna la suma de dos numeros dados como strigs", function () {
        var x = add("uno","eleven");//entrada invalida
        expect(x).toEqual("zero");
    });
});

describe("add", function () {
    it("Retorna la suma de dos numeros dados como strigs", function () {
        var x = add("one hundred eleven two one","eleven thirty");//entrada invalida 
        expect(x).toEqual("zero");
    });
});