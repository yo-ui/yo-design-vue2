
import {Constants} from '@/common/env'
import fqCommon from '@/common/common'
export default {//state
  lang:(fqCommon.getItem(Constants.LOCALSTORAGEKEY.LANGUAGE)||fqCommon.variablePool.language||'EN').replace(/_/gi,'-'),//默认语言
  langObj:null,//设置语言对象,
  langMap: Constants.LANGMAP,//所有语言对象
}

