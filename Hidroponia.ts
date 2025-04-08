export default class HidroPonia {
    temperatura: number;
    umidade: number;
    condutividade: number

    constructor() {
        this.temperatura = HidroPonia.getRandomArbitrary()
        this.umidade = HidroPonia.getRandomArbitrary()
        this.condutividade = HidroPonia.getRandomArbitrary()
    }

    static getRandomArbitrary() {
        return Math.floor(Math.random() * (100 - 1) + 1);
    }

    static mediaTemperatura(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia) {
        const temperatura = (instancia.temperatura + instancia2.temperatura + instancia3.temperatura) / 3
        return temperatura
    }

    static mediaUmidade(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia) {
        const umidade = (instancia.umidade + instancia2.umidade + instancia3.umidade) / 3
        return umidade
    }

    static mediaCondutividade(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia) {
        const condutividade = (instancia.condutividade + instancia2.condutividade + instancia3.condutividade) / 3
        return condutividade
    }

    static comparaNumbers(a: number, b: number) {
        return a - b
    }


    static medianaTemperatura(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia, instancia4: HidroPonia) {
        const array = [instancia.temperatura, instancia2.temperatura, instancia3.temperatura]
        array.sort(HidroPonia.comparaNumbers)


        if (array.length % 2 === 0) {
            return (array[1] + array[2]) / 2
        } else {
            return array[Math.floor(array.length / 2)]
        }

    }

    static medianaUmidade(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia, instancia4: HidroPonia) {
        const array = [instancia.umidade, instancia2.umidade, instancia3.umidade]
        array.sort(HidroPonia.comparaNumbers)

        if (array.length % 2 === 0) {
            return (array[1] + array[2]) / 2
        } else {
            return array[Math.floor(array.length / 2)]
        }

    }

    static medianaCondutividade(instancia: HidroPonia, instancia2: HidroPonia, instancia3: HidroPonia, instancia4: HidroPonia) {
        const array = [instancia.condutividade, instancia2.condutividade, instancia3.condutividade]
        array.sort(HidroPonia.comparaNumbers)

        if (array.length % 2 === 0) {
            return (array[1] + array[2]) / 2
        } else {
            return array[Math.floor(array.length / 2)]
        }
    }

}
