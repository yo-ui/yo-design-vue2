#!/usr/bin/env node
const ejs=require('ejs')
const fs = require('fs')
const path = require('path')

const name = process.argv[ 2 ]
const moduleName = process.argv[ 3 ]


/**
 * 时间格式化函数, 按照指定格式化字符串格式化传入时间
 * 
 * @param {Date} time 需要格式化的时间
 * @param {String} fmStr 定义时间的格式
 * 		YYYY: 代表四位数年份
 * 		  YY: 代表两位数年份 
 * 		  MM: 代表月份(小于10时补0)
 * 		  DD: 代表日期(小于10时补0)
 * 		  hh: 代表小时(小于10时补0)
 * 		  mm: 代表分钟(小于10时补0)
 * 		  ss: 代表秒数(小于10时补0)
 * 		 SSS: 代表毫秒数
 * 		   w: 代表周几(数字) 
 * 		   W: 代表周几(中文) 
 * 		  ww: 代表周几(英文) 
 * @returns {String} 返回格式化的时间
 */
function timeFormat(time, fmStr) {
	const weekCN = '一二三四五六日'
	const weekEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	let year = time.getFullYear()
	let month = time.getMonth() + 1
	let day = time.getDate()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let seconds = time.getSeconds()
	let milliSeconds = time.getMilliseconds()
	let week = time.getDay()

	month = month >= 10 ? month : ('0' + month)
	day = day >= 10 ? day : ('0' + day)
	hours = hours >= 10 ? hours : ('0' + hours)
	minutes = minutes >= 10 ? minutes : ('0' + minutes)
	seconds = seconds >= 10 ? seconds : ('0' + seconds)

	if (fmStr.indexOf('YYYY') !== -1) {
		fmStr = fmStr.replace('YYYY', year)
	} else {
		fmStr = fmStr.replace('YY', (year + '').slice(2))
	}
	fmStr = fmStr.replace('MM', month)
	fmStr = fmStr.replace('DD', day)
	fmStr = fmStr.replace('hh', hours)
	fmStr = fmStr.replace('mm', minutes)
	fmStr = fmStr.replace('ss', seconds)
	fmStr = fmStr.replace('SSS', milliSeconds)
	fmStr = fmStr.replace('W', weekCN[week - 1])
	fmStr = fmStr.replace('ww', weekEN[week - 1])
	fmStr = fmStr.replace('w', week)

	return fmStr
}


if (name === undefined) {
	console.error('Error: Please provide the component name.')
	return
}

if (moduleName === undefined) {
	console.error('Error: Please provide the component moduleName.')
	return
}

let params = {
    name: name,
    moduleName: moduleName,
    lowerName: name.toLowerCase(),
	upperName: name.slice(0, 1).toUpperCase() + name.slice(1),
	author:'eric',
	date:timeFormat(new Date(),'YYYY-MM-DD hh:mm:ss')
}

let options={

}

const files = [
	{
		template: './build/template/less.ejs',
		path: `assets/less/components/${moduleName}/${params.lowerName}.less`
	}, 
	{
		template: './build/template/demo-less.ejs',
		path: `examples/src/assets/less/pages/components/${moduleName}/${params.lowerName}.less`
	}, 
	{
		template: './build/template/index.ejs',
		path: `src/components/${moduleName}/index.js`
	},
	{
		template: './build/template/component.ejs',
		path: `src/components/${moduleName}/${params.lowerName}.vue`
	}, 
	{
		template: './build/template/doc.ejs',
		path: `examples/src/pages/components/${moduleName}/${params.lowerName}.vue`
	}, 
	{
		template: './build/template/doc_en.ejs',
		path: `examples/src/pages/components_en/${moduleName}/${params.lowerName}.vue`
	}, 
	{
		template: './build/template/demo.ejs',
		path: `examples/components/demos/${moduleName}/${params.lowerName}1.vue`
	}, 
	{
		template: './build/template/demo.ejs',
		path: `examples/components/demos/${moduleName}/${params.lowerName}2.vue`
	}, 
	{
		template: './build/template/demo.ejs',
		path: `examples/components_en/demos/${moduleName}/${params.lowerName}1.vue`
	},
	{
		template: './build/template/demo.ejs',
		path: `examples/components_en/demos/${moduleName}/${params.lowerName}2.vue`
	}
]

const paths = [
  `src/components/${moduleName}`,
  `assets/less/components/${moduleName}`,
  `examples/components/demos/${moduleName}`,
  `examples/src/assets/less/pages/components/${moduleName}`,
  `examples/src/pages/components/${moduleName}`,
  `examples/components_en/demos/${moduleName}`
]

for (let p of paths) {
    try {
        //创建目录
        fs.mkdirSync(p,{recursive: true }, (err) => {
            if (err) {
                console.error(error.message)
            }else{
				console.warn(p,'创建成功')
			}
        })
    } catch (error) {
        console.error(error.message)
    }
}

for (let f of files) {
    ejs.renderFile(path.resolve(f.template), params,options,function(err,str){
        if(!err){
            try {
                fs.writeFile(f.path,str , function () {
                console.log(f.path, ' create success')
                })
            } catch (error) {
                console.error(f.path,'create fail')
            }
        }else{
            console.error(f.path,err,'template render fail')
        }
    })
}


//demo
// node build/template.js button-group button-group
// node build/template.js button button
// node build/template.js button basic/button
 
