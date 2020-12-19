#-*- coding: UTF-8 -*-

import os
import sys
import requests
import base64
import json

def execAddDevice(gameToken,_name,_udid):
	deviceData = {"data": {"attributes":{"name": _name,"platform": "IOS","udid": _udid,"type": "devices"}}}
	deviceData = json.dumps(deviceData)
	src_url ="https://api.appstoreconnect.apple.com/v1/devices"
	mdl_rqt = requests.post(
		src_url,
		data=deviceData,
		headers={
		'Content-Type' : 'application/json',
		 #'Authorizations':'Bearer '+gameToken
        "Authorization": "Bearer %s" % gameToken
		},
		timeout=30
		)
	jsonStr =mdl_rqt.text
	print(jsonStr)

	if mdl_rqt.status_code == 200 or mdl_rqt.status_code == 201:
		DeviceResopnse = josn.loads(jsonStr)
		newDeviceID = DeviceResopnse["data"]["id"]
		print("data:" + _udid +":" + newDeviceID)
		return
	elif mdl_rqt.status_code == 400:
		print("data:" +_udid)
		return
	print("status_code:" + bytes(mdl_rqt.status_code))

if __name__ == '__main__':
	argv =sys.argv
	_name=argv[1]
	gameToken = argv[2]
	_udid=argv[3]
	#platform=argv[4]

	execAddDevice(gameToken,_name,_udid)