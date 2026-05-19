import express from 'express'
import 'dotenv/config'
import aiRoute from './routes/aiRoutes.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/api/ai", aiRoute)
app.get("/home", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Backend HTML</title>
            <style>
                body {
                    font-family: Arial;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:#111;
                    color:white;
                }

                .card{
                    padding:30px;
                    border-radius:20px;
                    background:#222;
                    text-align:center;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Hello Backend 👋</h1>
                <p>ส่ง HTML จาก Express ตรงๆ</p>

                <button onclick="alert('กดได้ด้วย')">
                    Click
                </button>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})