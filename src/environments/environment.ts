import { SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

export const environment = {
  production: false,
  socketConfig: config,
  apiURL: 'http://localhost:5000',
  maxHistorialTurnos: 4,
  volumenAudio: 1 // 0.0 a 1 (100%)
};