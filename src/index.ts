
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import HxGet from './pages/HxGet';
import HxPost from './pages/HxPost';
import HxOn from './pages/HxOn';
import ClickEvent from './pages/ClickEvent';
import JsonParse from './pages/JsonParse';
import DialogOpen from './pages/DialogOpen';
//
import testRouter from './routes/test'; 
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/test', testRouter);

//MPA
app.get('/hxget', (req: any, res: any) => {
  try {res.send(renderToString(HxGet()));} catch (error) { res.sendStatus(500);}
});
app.get('/hxpost', (req: any, res: any) => {
  try {res.send(renderToString(HxPost()));} catch (error) { res.sendStatus(500);}
});
app.get('/hxon', (req: any, res: any) => {
  try {res.send(renderToString(HxOn()));} catch (error) { res.sendStatus(500);}
});
app.get('/click_event', (req: any, res: any) => {
  try {res.send(renderToString(ClickEvent()));} catch (error) { res.sendStatus(500);}
});
app.get('/json_parse', (req: any, res: any) => {
  try {res.send(renderToString(JsonParse()));} catch (error) { res.sendStatus(500);}
});
app.get('/dialog_open', (req: any, res: any) => {
  try {res.send(renderToString(DialogOpen()));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
export default app;
