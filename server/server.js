import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import dotenv from 'dotenv';
import path from 'path';
import logger from './helpers/logger';
import routes from './routes/todoRoutes';

dotenv.config();

const app = express();

// Config middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// Define routes right here
app.use('/', routes);

// Serve static files in production
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startServer = async () => {
  try {
    // Connect to mongoDb
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    app.listen(process.env.PORT, () =>
      logger.info(`App started on port ${process.env.PORT}`),
    );
  } catch (error) {
    logger.error(error);
  }
};

startServer();
