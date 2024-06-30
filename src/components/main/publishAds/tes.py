import asyncio
import aiohttp
import json
import random

# Liste des proxies
proxies = [
    'https://172.245.10.132:34567',
    'https://152.67.9.179:8100',
    'https://47.251.85.12:80',
    'https://20.235.159.154:80',
    'https://172.245.10.130:34567',
    'https://62.60.165.78:80',
    'https://43.132.124.11:3128',
    'https://159.65.77.168:8585',
    'https://47.251.43.115:33333',
    'https://190.103.177.131:80',
    'https://195.114.209.50:80',
    'https://188.132.209.245:80',
    'https://51.89.14.70:80',
    'https://62.210.15.199:80',
    'https://222.119.186.81:3129',
    'https://93.171.220.229:8888',
    'https://216.137.184.253:80',
    'https://59.144.184.73:80',
    'https://47.251.70.179:80',
    'https://20.193.154.130:8888',
    'https://133.18.234.13:80',
    'https://51.89.73.162:80',
    'https://63.209.32.128:6868',
    'https://137.184.6.203:8081',
    'https://195.35.3.117:80',
    'https://198.44.255.3:80',
    'https://143.110.232.177:80',
    'https://154.203.132.55:8090',
    'https://159.65.244.233:80',
    'https://163.181.117.60:80',
    'https://162.240.76.92:80',
    'https://51.210.19.141:80',
    'https://20.24.43.214:80',
    'https://74.48.78.52:80',
    'https://154.65.39.8:80',
    'https://36.2.73.231:80',
    'https://162.245.85.220:80',
    'https://213.143.113.82:80',
    'https://66.191.31.158:80',
    'https://103.133.221.251:80',
    'https://192.73.244.36:80',
    'https://198.44.255.5:80',
    'https://50.174.7.153:80',
    'https://209.13.186.20:80',
    'https://178.128.113.118:23128',
    'https://160.86.242.23:8080',
    'https://4.155.2.13:9480',
    'https://43.255.113.232:8082',
    'https://194.67.91.153:80',
    'https://198.49.68.80:80',
    'https://35.185.196.38:3128',
    'https://122.10.225.55:8000',
    'https://167.102.133.105:80',
    'https://109.230.92.50:3128',
    'https://50.231.110.26:80',
    'https://50.217.226.42:80',
    'https://50.218.57.67:80',
    'https://50.223.242.97:80',
    'https://50.218.204.106:80',
    'https://50.175.212.72:80',
    'https://50.174.7.162:80',
    'https://50.174.145.8:80',
    'https://50.175.212.66:80',
    'https://50.218.224.35:80',
    'https://50.217.226.43:80',
    'https://50.217.226.44:80',
    'https://50.169.135.10:80',
    'https://50.207.199.83:80',
    'https://96.113.158.126:80',
    'https://50.174.7.155:80',
    'https://50.174.145.15:80',
    'https://50.223.239.168:80',
    'https://50.222.245.50:80',
    'https://50.222.245.45:80',
    'https://50.146.203.174:80',
    'https://50.174.7.156:80',
    'https://50.207.199.81:80',
    'https://50.222.245.44:80',
    'https://50.221.74.130:80',
    'https://50.239.72.17:80',
    'https://167.99.174.59:80',
    'https://50.122.86.118:80',
    'https://50.171.187.51:80',
    'https://50.173.182.90:80',
    'https://50.223.239.177:80',
    'https://50.222.245.46:80',
    'https://167.102.133.106:80',
    'https://50.168.72.114:80',
    'https://50.171.177.124:80',
    'https://50.223.239.185:80',
    'https://50.174.145.11:80',
    'https://50.172.39.98:80',
    'https://50.172.75.127:80',
    'https://50.174.145.12:80',
    'https://50.223.239.194:80',
    'https://50.217.226.41:80',
    'https://68.185.57.66:80',
    'https://50.175.212.74:80',
    'https://50.223.239.183:80',
    'https://50.231.172.74:80',
    'https://193.30.13.18:999',
    'https://188.166.56.246:80',
    'https://172.173.132.85:80',
    'https://50.174.145.9:80',
    'https://52.117.32.233:82',
    'https://50.175.212.76:80',
    'https://138.91.159.185:80',
    'https://155.94.241.134:3128',
    'https://34.122.187.196:80',
    'https://50.220.168.134:80',
    'https://50.168.72.122:80',
    'https://50.231.104.58:80',
    'https://80.228.235.6:80',
    'https://50.207.199.86:80',
    'https://50.218.57.70:80',
    'https://85.8.68.2:80',
    'https://50.207.199.87:80',
    'https://41.207.187.178:80',
    'https://89.22.120.116:80',
    'https://50.144.168.74:80',
    'https://50.172.75.122:80',
    'https://50.168.72.116:80',
    'https://50.168.72.117:80',
    'https://82.119.96.254:80',
    'https://50.218.57.68:80',
    'https://50.223.246.237:80',
    'https://50.174.7.158:80',
    'https://190.58.248.86:80',
    'https://24.205.201.186:80',
    'https://50.145.24.176:80',
    'https://213.33.2.28:80',
    'https://213.33.126.130:80',
    'https://50.218.204.99:80',
    'https://50.172.75.126:80',
    'https://50.218.57.69:80',
    'https://194.219.134.234:80',
    'https://5.161.103.41:88',
    'https://91.65.103.3:80',
    'https://50.222.245.43:80',
    'https://50.168.72.118:80',
    'https://50.171.187.50:80',
    'https://146.190.177.143:80',
    'https://50.222.245.42:80',
    'https://50.169.135.8:80',
    'https://50.217.226.45:80',
    'https://50.168.72.120:80',
    'https://50.144.168.75:80',
    'https://50.231.68.5:80',
    'https://50.169.135.9:80',
    'https://50.145.24.177:80',
    'https://50.168.72.113:80',
    'https://50.175.212.75:80',
    'https://50.168.72.115:80',
    'https://50.171.187.49:80',
    'https://50.174.7.154:80',
    'https://50.175.212.67:80',
    'https://50.223.246.235:80',
    'https://50.169.135.11:80',
    'https://50.223.246.234:80',
    'https://50.169.135.12:80',
    'https://50.172.39.96:80',
    'https://50.223.246.236:80',
    'https://80.228.235.7:80',
    'https://50.223.239.176:80',
    'https://50.222.245.41:80',
    'https://50.218.57.66:80',
    'https://50.174.7.157:80',
    'https://50.231.104.59:80',
    'https://50.169.135.13:80',
    'https://50.218.204.100:80',
    'https://80.228.235.8:80',
    'https://50.223.239.178:80',
    'https://50.218.204.101:80',
    'https://50.223.239.179:80',
    'https://50.223.239.180:80',
    'https://50.223.239.181:80',
    'https://50.231.104.60:80',
    'https://50.171.187.48:80',
    'https://50.222.245.47:80',
    'https://50.223.239.182:80',
    'https://50.145.24.178:80',
    'https://50.218.204.102:80',
    'https://50.222.245.48:80',
    'https://50.231.104.61:80',
    'https://50.222.245.49:80',
    'https://50.168.72.119:80',
    'https://50.218.204.103:80',
    'https://50.168.72.121:80',
    'https://50.231.110.25:80',
    'https://50.144.168.76:80',
]

async def make_post_request(session, url, data, proxy):
    headers = {'Content-Type': 'application/json'}
    async with session.post(url, headers=headers, json=data, proxy=proxy) as response:
        try:
            return await response.json()
        except aiohttp.ContentTypeError:
            return {"status": "error", "msg": "Invalid response"}

async def main():
    url = 'https://api.conntrc.com/api/user/register?lang=null'
    base_email = 'deletethiswebsite@pussy4{}.com'  # Modèle d'e-mail avec un espace réservé pour le chiffre
    base_password = 'password123'  # Mot de passe fixe pour toutes les requêtes

    async with aiohttp.ClientSession() as session:
        tasks = []
        num_requests = 10

        for i in range(1, num_requests + 1):
            proxy_ip = random.choice(proxies)  # Choisir un proxy aléatoirement
            data = {
                'account': base_email.format(i),
                'pwd': base_password,
                'user_type': 1,
                'code': 459175
            }
            task = asyncio.create_task(make_post_request(session, url, data, proxy_ip))
            tasks.append(task)

        responses = await asyncio.gather(*tasks)

        for response in responses:
            print(response["status"])

if __name__ == '__main__':
    asyncio.run(main())
