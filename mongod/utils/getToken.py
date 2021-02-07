# -*- coding:utf-8 -*-

import jwt
import time
import json
import requests
import sys
from datetime import datetime, timedelta


algorithm = 'ES256'
base_api_url = "https://api.appstoreconnect.apple.com"


def get_token(key, iss, key_file):
    """
    :param key:
    :param iss:
    :param key_file:
    :return:
    """
    # 读取私钥
    private_key = open(key_file, 'r').read()
    # 构造header
    header = {
        "alg": algorithm,
        "kid": key,
        "typ": "JWT"
    }
    # 构造payload
    payload = {
        "iss": iss,
        "exp": int(time.mktime((datetime.now() + timedelta(minutes=20)).timetuple())),
        "aud": "appstoreconnect-v1"
    }

    token = jwt.encode(payload=payload, key=private_key, algorithm=algorithm, headers=header).decode('ascii')
    return token

if __name__ == "__main__":
#         ios_api_key = 'G6RV3V7K77'
#         ios_api_issuer = '483353e9-42aa-485f-9f1a-78557031e2b9'
        ios_api_key = sys.argv[1]
        ios_api_issuer = sys.argv[2]
        file_key = 'utils/AuthKey_{0}.p8'.format(ios_api_key)
        token_api = get_token(ios_api_key, ios_api_issuer, file_key)
        print (token_api)
        # print (sys.argv[1])
        # print (sys.argv[2])
