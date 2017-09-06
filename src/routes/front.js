//前端路由
import KoaRouter from 'koa-router'
import controllers from '../controllers'
import moment from 'moment'
import {
	SYSTEM
} from '../config'
const router = new KoaRouter()

// 请求接口校验中间件
const checkfn = controllers.common.checkRequestUrl;

/*-------------------------------------首页相关-----------------------------------------------*/

/*首页页面*/
router.get(['/'], async(ctx, next) => {
	let datas = {
		title:'HOME首页',
		imgBase:SYSTEM.BASEIMG,
		datas:[{
			name:'zhang san',
			age:20,
		},{
			name:'li si',
			age:25,
		},{
			name:'wang wu',
			age:22,
		},{
			name:'xiao zhang',
			age:28,
		}],
	}

	await ctx.render('front/index',{
		datas:datas
	}); 
});



module.exports = router






