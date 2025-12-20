const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;

const peerServer = PeerServer({
    port: PORT,
    path: '/peerjs',
    proxied: true,
    allow_discovery: true,
});

console.log(`MineDuo Signaling Server running on port ${PORT}`);
