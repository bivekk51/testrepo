// api/upload.js
export default async function handler(req, res) {
    const response = await fetch('http://192.168.1.78:5000/upload', {
      method: req.method,
      headers: req.headers,
      body: req.body,
    });
  
    const data = await response.json();
    res.status(response.status).json(data);
  }
  