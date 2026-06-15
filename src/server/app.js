import Express from 'express'
import cors from 'cors'

const app = Express()

// Middlewares
app.use(cors())
app.use(Express.json())

// Rutas
app.get('/', (req, res) => {
  console.log('La logica del servidor se ha ejecutado correctamente.')
  res.json({ message: 'La logica del servidor se ha ejecutado correctamente.' })
})

export default app