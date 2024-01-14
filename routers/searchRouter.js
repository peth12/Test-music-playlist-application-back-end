import express from 'express'
import { search } from '../controllers/search/search.js';
search

const searchRouter = express.Router();


searchRouter.get("/" , search)

export {searchRouter}