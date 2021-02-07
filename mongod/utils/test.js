var array = ['2xuting1adhoc.mobileprovision','AuthKey_G6RV3V7K77.p8','issuer.txt','xuting1dis.p12']

function getKey (array) {
	var arr1 =array.map((item,i,array)=>{
		return item.split('.')[1]
	})
	return arr1
}


function getObj (arrKey,arrValue) {
	var obj = {}
	for(var i = 0;i<arrKey.length;i++){
		obj[arrKey[i]] = array[i]
	}
	return obj

}

var obj = getObj(getKey(array),array)
console.log(obj)