```bash
vim /etc/dovecot/dovecot.conf
protocols = imap pop3 lmtp
listen = *


disable_plaintext_auth = no
auth_mechanisms = plain login


vim /etc/dovecot/conf.d/10-mail.conf 
mail_location = maildir:~/Maildir

vim /etc/dovecot/conf.d/10-ssl.conf 
ssl = no

tail -f /var/log/maillog

adduser


#main.cf文件的配置
75.myhostname = mail.imdanteking.com
83.mydomain = imdanteking.com
99.myorigin = $mydomain
116.inet_protocols = all
164.mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
164.mynetworks = 127.0.0.0/8
419.home_mailbox = Maildir/
#以下的配置不是必要
574.smtpd_banner = $myhostname ESMTP
683
message_size_limit = 10485760
mailbox_size_limit = 1073741824
smtpd_sasl_type = dovecot
smtpd_sasl_path = private/auth
smtpd_sasl_auth_enable = yes
smtpd_sasl_security_options = noanonymous
smtpd_sasl_local_domain = $myhostname
smtp_recipient_restrictions = permit_mynetworks,permit_auth_destination,permit_sasl_authenticated,reject



install mysql 
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
sudo yum install mysql-server
service mysqld restart

mkdir /var/www/extsuite

```



