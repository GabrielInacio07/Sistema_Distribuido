import * as net from 'net'

const cliente: net.Socket = net.createConnection({
    host:'localhost',
    port:3000
})


cliente.on('data', (mensagem: Object) => {
    console.log(`${mensagem.toString()}`)
})

                     
cliente.on('close', ()=>{
    console.log('Conexão fechada')
})

cliente.write(JSON.stringify('media'),()=>{

})

cliente.end();





