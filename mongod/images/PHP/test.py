# -*- coding:utf-8 -*-
# Author: drew
# create time: 2020-07030
# update time:
# app store connect api


import jwt
import time
import json
import requests
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


def base_call(url, token, method="get", data=None):
    """
    :param url:
    :param token:
    :param method:
    :param data:
    :return:
    """

    re_header = {"Authorization": "Bearer %s" % token}
    r = {}
    url = base_api_url + url

    requests.adapters.DEFAULT_RETRIES = 1
    req = requests.session()
    req.keep_alive = False

    if method.lower() == "get":
        r = req.get(url, params=data, headers=re_header)

    elif method.lower() == "post":
        re_header["Content-Type"] = "application/json"
        r = req.post(url=url, headers=re_header, data=json.dumps(data))

    elif method.lower() == "patch":
        re_header["Content-Type"] = "application/json"
        r = req.patch(url=url, headers=re_header, data=json.dumps(data))
    return r

# ------------------ 获取具体接口的方法 ------------------


def get_devices(api_token, data=None):
    """
    获取devices信息
    :param api_token:
    :param data:
    :return:
    """
    get_devices_url = '/v1/devices'
    if data is None:
        data = {
            "filter[platform]": "IOS",
            # "filter[status]": "ENABLED",
            "limit": 100
        }
    res = base_call(get_devices_url, api_token, 'get', data)
    return res


def set_devices(api_token, data):
    """
    增加devices信息
    :param api_token:
    :param data:
    :return:
    """
    set_device_url = '/v1/devices'
    res = base_call(set_device_url, api_token, 'post', data)
    return res


def update_devices(api_token, id, data,):
    """
    增加devices信息
    :param id:
    :param api_token:
    :param data:
    :return:
    """
    set_device_url = '/v1/devices/{%s}' % id
    res = base_call(set_device_url, api_token, 'patch', data)
    return res


if __name__ == "__main__":

    ios_api_key = 'G6RV3V7K77'
    ios_api_issuer = '483353e9-42aa-485f-9f1a-78557031e2b9'
    file_key = './AuthKey_{0}.p8'.format(ios_api_key)
    token_api = get_token(ios_api_key, ios_api_issuer, file_key)
    # get_udid()
    post_data = {
        "data": {
            "attributes": {
                "name": "xuting1adhoc",
                "platform": "IOS",
                "udid": "cd76d7e736b2053e22c17d031de7fed6e1daa529"
            },
            "type": "devices"
        }
    }

    print(token_api)

    print(post_data)
    res = set_devices(token_api, post_data)
    #res =get_devices(token_api)
    print(res)