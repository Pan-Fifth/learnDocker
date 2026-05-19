import express from 'express'
import { chatWithAi } from '../controllers/aiController.js'


const router = express.Router()
router.post("/", chatWithAi)

export default router