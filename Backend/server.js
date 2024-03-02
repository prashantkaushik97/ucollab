import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import bodyParser from 'body-parser';
import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ucollab-486a6-default-rtdb.firebaseio.com"
  });

const csrfMiddleware = csrf({ cookie: true });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.use('/users', (await import('./controllers/users.js')).default);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});