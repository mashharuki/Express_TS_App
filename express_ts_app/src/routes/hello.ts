/**
 * helloページ用のtsファイル
 */
import { Request, Response, Router } from 'express'

const router:Router = Router()

// ルーティング
router.get('/', function(req:Request, res:Response): void {
    res.render('hello', {
        header: 'Hello page',
        title: 'Hello!',
        msg: 'This is Hello page!'
    })
})

export default router