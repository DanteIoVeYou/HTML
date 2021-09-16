video 1

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
# examine version number
nginx -v

# start 
nginx

# stop
nginx -s stop

# reload
ngnix -s reload

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

