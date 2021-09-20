video  1

1.Basic concept of nginx 

(1) What is nginx? What can nginx do?

(2) Reverse proxy

(3) Load balancer

(4)动静分离

2.installation, common command and configuration of nginx 

(1) Install nginx on Linux

(2) Common commands of ngnix

(3)Configuration files of ngnix

3.example1

4.example2

5.example3

6.example4

7.theory



video 2

Ngnix is specially developed for performance optimization.

video3

Reverse Proxy

video 4

Load balancer:



video 5

Install ngnix

```bash
yum install -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel 

cd /usr/src

wget -c http://nginx.org/download/nginx-1.20.1.tar.gz

tar -xvf nginx-1.20.1.tar.gz

cd nginx-1.20.1

./configure

make && make install

```

video 6

operation command

```bash
cd /usr/local/nginx/sbin
# examine version number
./nginx -v

# start 
./nginx

# stop
./nginx -s stop

# reload
./ngnix -s reload

# set environment varibles
echo 'export PATH=/usr/local/nginx/sbin:$PATH' > /etc/profile.d/nginx/sh
. /etc/profile.d/ngnix.sh
```

video 7

configuration files

1.Where is the file?

```bash
/usr/local/nginx/conf/nginx.conf
```

2.Composition

(1)Global block

eg: worker_processes #decide the number of concurrent cpus



(2)events

include network connection between Ngnix server and users

eg: work_connections 1024 # maximum amounts of connections



(3)http

<1>http global block



<2>server block



video 8

example1------reverse proxy

1.open browser,input www.123.com in address bar, and then skip to tomcat in linux

2.preparation

(1) install tomcat, default port=8080

<1>tar -xvf

<2>

cd tomcat/bin

./startup.sh



(2)open port for external access

```bash
firewall-cmd --add-port=8080/tcp --permanent

firewall-cmd reload
```

we can examine the port that has been opened

```bash
firewall-cmd --list-all
```



video 9

configure reverse proxy 1

```bash
server {
        listen       80;
        server_name  #your ip;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            #proxy_pass http;//127.0.0.1:8080;
            index  index.html index.htm;
        }


```

video 10

configure reverse proxy 2

aim

```bash
visit:http://ip:9001/edu/ go to 127.0.0.1:8080
visit:http://ip:9001/vod/ go to 127.0.0.1:8081
```

file

```bash
server{
	listen      	 9001;
	server_name      192.168.0.1;
	
	locaton ~ /edu/ {
		proxy_pass http://127.0.0.1:8080;
	}
	location ~ /vod/ {
		proxy_pass http://127.0.0.1:8081;
	}
}
```

video 11

load balancing

1. polling

2. weight

3. ip_hash

4. fair





video 12

