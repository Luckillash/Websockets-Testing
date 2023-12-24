const WebSocket = require('ws')

const { v4: uuidv4 } = require('uuid');

const wsServer = new WebSocket.Server({ port: '8080' })

// Almacenar IDs de usuarios conectados
const usuariosConectados = new Map()

const salas = { }

// Manejar la conexión de un cliente.
wsServer.on('connection', socket => {

    // Manejar el error de conexión de un cliente.
    socket.on('error', console.error)

    // Generar un ID único para el usuario
    const usuarioId = uuidv4()

    // Asignar el ID al WebSocket del usuario
    usuariosConectados.set(socket, usuarioId);

    console.log(`Nueva conexión generada con ID: ${usuarioId}`)

    const dejarSala = sala => {

        if (!salas[sala][usuarioIdId]) return

        if(Object.keys(salas[sala]).length === 1) delete salas[sala]

        else delete salas[sala][usuarioId]

        console.log("Sala dejada exitosamente")

    }

    const unirseSala = sala => {

        if(!salas[sala]) salas[sala] = {}

        if(!salas[sala][usuarioId]) salas[sala][usuarioId] = socket

    }

    const enviarMensajeSala = (sala, mensaje) => {

        Object.entries(salas[sala]).forEach(([,sock]) => sock.send({ mensaje }))

    }

    // Manejar los mensajes recibidos de un cliente.
    socket.on('message', (data) => {

        const { message, meta, sala } = JSON.parse(data)

        if (meta === "join") unirseSala(sala)

        else if (meta === "leave") dejarSala(sala)

        else if (!meta) enviarMensajeSala(sala, mensaje)

        // wsServer.clients.forEach((client) => {

        //     // Si el cliente es distinto al socket actual y el estado del cliente es abierto, enviar un Broadcast.
        //     if (client !== socket && client.readyState === WebSocket.OPEN) {

        //         client.send("Mensaje general para todos")
        //     }

        // })

    }) 

    // Manejar la desconexión de un cliente.
    socket.on('close', () => {

        // Eliminar al usuario de la lista de usuarios conectados cuando se desconecta

        usuariosConectados.delete(socket);

        console.log(`Usuario desconectado: ${usuarioId}`);

    })
    
})