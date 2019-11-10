

import { addUser } from '../controllers/hbd.controller';
import { Application } from 'express';
import { SocketDotIO } from 'socket.io';

export const hbdRoutes = (app: Application, io: SocketIO.Server) => {
  console.log("Initializing test routes");
  app.route('/api/v1/users')
    .post(addUser);
}