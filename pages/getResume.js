import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('C:\Users\pasca\developedbypascalmusabyimana\pascal.pdf');
  const file = fs.readFileSync(filePath).toString('base64');
  
  res.setHeader('Content-Type', 'application/pdf');
  res.send(Buffer.from(file, 'base64'));
}
