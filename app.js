import express from 'express'
import 'dotenv/config'
import connectToMongoDB from './Database/connectToMongoDB.js'
import { songRouter } from './routers/songRouter.js'
import { playlistRouter } from './routers/playlistRouter.js'
import { searchRouter } from './routers/searchRouter.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import cors  from 'cors'


connectToMongoDB()
const swaggerDocument = YAML.load('./swagger.yaml');
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use(express.json())
app.use("/api/songs" , songRouter)
app.use("/api/playlists" , playlistRouter)
app.use("/api/" , searchRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server start on PORT ${PORT}`))