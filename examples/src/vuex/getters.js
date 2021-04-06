import {Constants} from '@/common/env'
import {getLang} from '@/common/lang/index'
import fqCommon from '@/common/common'

export default {
    getLangObj(state){
        let langObj=state.langObj
        if(!langObj){
            let lang=state.lang
            langObj=getLang(lang)
        }
        return langObj
    },
}
