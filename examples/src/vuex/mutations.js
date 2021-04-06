/* !!
 * $store.commit
 * ===== ===== =====
 */
import {Constants} from '@/common/env'
import {getLang} from '@/common/lang/index'
import fqCommon from '@/common/common'

export default {
	//设置当前的语言环境
	setCurrentLang(state,item){
		fqCommon.setItem(Constants.LOCALSTORAGEKEY.LANGUAGE,item)
		state.lang=item
		state.langObj=getLang(item)
		// if(item=='ZH-CN'){
		// 	ELEMENT.locale(ELEMENT.lang.zhCN)
		// }else{
		// 	ELEMENT.locale(ELEMENT.lang.en)
		// }
	},
}
