import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //费率获取
    async getContent(context,{url,params}){
        const data= await get({
            url:url,
            params:params,
            store:context
        })
        // console.log(data.data)
        return data
    },    
}