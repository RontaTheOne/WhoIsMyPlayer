import Express from 'express'
import cors from 'cors'
import worldCupPlayerRoutes from './routes/worldCupPlayerRoutes.js'

const app = Express()

// Middlewares
app.use(cors())
app.use(Express.json())

// Rutas
app.use('/world-cup-players', worldCupPlayerRoutes)
app.use('/world-cup-teams', worldCupPlayerRoutes)
app.get('/', (req, res) => {
  console.log('La logica del servidor se ha ejecutado correctamente.')
  res.json({ message: 'La logica del servidor se ha ejecutado correctamente.' })
})




export default app