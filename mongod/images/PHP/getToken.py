
#-*- coding: UTF-8 -*-

import os
import sys
import time
import jwt
import requests
import json


def requestToken(kID,issuer):
	header = {
	"alg": "ES256",
	"kid": kID,
	"typ": "JWT"
	}
	payload = {
	"iss": issuer,
	"exp":int(time.time())+60*1600,
	"aud": "appstoreconnect-v1"
	}

	privateFile='./AuthKey_{0}.p8'.format(kID)
	privateFile=os.path.realpath(privateFile)
	privatekey=open(privateFile,"r").read()
	gameToken=jwt.encode(payload=payload, key=privatekey, algorithm="ES256", headers=header).decode('ascii')
	print(gameToken)

if __name__ == '__main__':
	argv = sys.argv
	kID =argv[1]
	issuer = argv[2]
	requestToken(kID,issuer)