import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/express-test', (req, res) => {
  res.json({ message: 'Express is working!' })
})

export default fromNodeMiddleware(app)
