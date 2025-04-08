import * as net from 'net';
import HidroPonia from './Hidroponia';


const instancia = new HidroPonia()
const instancia2 = new HidroPonia()
const instancia3 = new HidroPonia()
const instancia4 = new HidroPonia()


const porta: number = 3002;

const server: net.Server = net.createServer((socket: net.Socket) => {

    //envia mensagem ao cliente      
    //tudo que está cheagando
    socket.on('data', (mensagem: Buffer) => {
        if (JSON.parse(mensagem.toString('utf-8')) === 'media') {
            socket.write(`A [Media] de [TEMPERATURA] da banca3: ${HidroPonia.mediaTemperatura(instancia, instancia2, instancia3).toFixed(2)}\n`)
            socket.write(`A [Media] de [UMIDADE] da banca3: ${HidroPonia.mediaUmidade(instancia, instancia2, instancia3).toFixed(2)}\n`)
            socket.write(`A [Media] de [CONDUTIVADADE] da banca3: ${HidroPonia.mediaCondutividade(instancia, instancia2, instancia3).toFixed(2)}\n`)
        }
        else if (JSON.parse(mensagem.toString('utf-8')) === 'mediana') {
            socket.write(`[Mediana] de [TEMPERATURA] da banca3: ${HidroPonia.medianaTemperatura(instancia, instancia2, instancia3, instancia4)}\n`)
            socket.write(`[Mediana] de [UMIDADE] da banca3: ${HidroPonia.medianaUmidade(instancia, instancia2, instancia3, instancia4)}\n`)
            socket.write(`[Mediana] de [CONDUTIVIDADE] da banca3: ${HidroPonia.medianaCondutividade(instancia, instancia2, instancia3, instancia4)}\n`)
        } else if (JSON.parse(mensagem.toString('utf-8')) === 'tudo') {

            socket.write("====== MEDIAS BANCA3 ======\n")
            socket.write(`A [Media] de [TEMPERATURA] da banca3: ${HidroPonia.mediaTemperatura(instancia, instancia2, instancia3).toFixed(2)}\n`)
            socket.write(`A [Media] de [UMIDADE] da banca3: ${HidroPonia.mediaUmidade(instancia, instancia2, instancia3).toFixed(2)}\n`)
            socket.write(`A [Media] de [CONDUTIVADADE] da banca3: ${HidroPonia.mediaCondutividade(instancia, instancia2, instancia3).toFixed(2)}\n\n`)

            socket.write("====== MEDIANAS BANCA3 ======\n")
            socket.write(`[Mediana] de [TEMPERATURA] da banca3: ${HidroPonia.medianaTemperatura(instancia, instancia2, instancia3, instancia4)}\n`)
            socket.write(`[Mediana] de [UMIDADE] da banca3: ${HidroPonia.medianaUmidade(instancia, instancia2, instancia3, instancia4)}\n`)
            socket.write(`[Mediana] de [CONDUTIVIDADE] da banca3: ${HidroPonia.medianaCondutividade(instancia, instancia2, instancia3, instancia4)}\n`)
        }else{
            socket.write('Requisicão Invalida!!')
        }

    })

    //fecha conexão com cliente
    socket.on('close', () => {
        console.log("Encerrando Sessão...")
    })
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${3002}`)
})