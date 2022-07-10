---
title: MySQL数据库基础
creation date: 2022-07-10 15:37 
status: todo
tags:
- MySQL
---

## 虚拟机使用说明

```shell
[root@mysql8 ~]# tree tools/
tools/
├── backup  备份和恢复工具
│   ├── binlog2sql.zip
│   ├── mydumper-0.9.5-2.el7.x86_64.rpm
│   └── percona-xtrabackup-80-8.0.27-19.1.el7.x86_64.rpm
├── ha   High Availablity高可用性
│   ├── mha4mysql-manager-0.58-0.el7.centos.noarch.rpm
│   ├── mha4mysql-node-0.58-0.el7.centos.noarch.rpm
│   └── Percona-XtraDB-Cluster_8.0.26-16.1_Linux.x86_64.glibc2.17.tar.gz
├── middleware 中间件
│   └── Mycat-server-1.6.7.5-release-20200410174409-linux.tar.gz
├── monitor 监控
│   ├── lepus_v3.8.zip
│   ├── MONyog_Ultimate_5.7.2.0.rar
│   ├── percona-release-latest.noarch.rpm
│   ├── xampp-linux-x64-5.5.38-2-installer.run
│   └── zabbix-release-5.0-1.el7.noarch.rpm
├── scott.sql
└── tuning  调优
    ├── mysql-utilities-1.6.5.tar.gz
    ├── percona-release-0.1-3.noarch.rpm
    ├── percona-toolkit-3.0.13-re85ce15-el7-x86_64-bundle.tar
    ├── script.rpm.sh
    └── SQLAdvisor.zip
```


	1、MySQL简介和分支（NoSQL数据库）
		（1）关系型数据库：关系模型---二维表（行、列）---遵循范式--优点：避免数据的冗余--缺点：影响性能
						   适合OLTP环境（online transaction processing）：insert、update、delete
						   有时候会创建冗余表，提高性能
						   行式存储
		（2）NoSQL数据库：not only SQL，一般都不遵循范式，造成数据的冗余，提高性能
			（*）Redis：基于内存
			（*）MongoDB：基于文档（BSON），从4.x开始支持事务（只适用于复制集环境，就是主从复制）
			（*）HBase：列式存储，适合select，适合OLAP（online analytic processing），属于Hadoop生态圈
			
		（3）MySQL分支
			（*）主流：Oracle官方
			（*）MariaDB
			（*）Percona Server for MySQL
	
	2、安装和配置MySQL数据库
		（1）MySQL的配置文件搜索过程：my.cnf
				[root@mysql8 ~]# mysqld --verbose --help | grep my.cnf
				/etc/my.cnf /etc/mysql/my.cnf /usr/local/mysql/etc/my.cnf ~/.my.cnf 
		
		（2）my.cnf配置参数
			[mysqld]
			server-id=1			当前数据库实例的ID号，唯一标识一个数据库，在主从复制和主主复制必须唯一
			port=3306			端口号
			basedir=/usr/local/mysql		安装目录
			datadir=/usr/local/mysql/data   数据库文件的目录
			log-error=/usr/local/mysql/data/error.log  错误日志文件，相当于Oracle告警日志alert日志
			socket=/tmp/mysql.sock 套接字文件
			pid-file=/usr/local/mysql/data/mysql.pid 保持了PID进程号
			character-set-server=utf8  服务器端的字符集
			lower_case_table_names=1	设置大小写是否敏感
				取值：0 区分大小写
				      1 存储时使用小写，比较的时候不区分
					  2 存储时使用给定的大小写，比较的时候使用小写
					  
			innodb_log_file_size=1G  重做日志文件，类似Oracle的redo日志，记录客户端的事务操作
			default-storage-engine=INNODB
			default_authentication_plugin=mysql_native_password
			[client]
			port=3306
			default-character-set=utf8
		
	3、客户端的连接方式
		补充：系统表mysql.user
		
		（1）本地连接
		（2）远程连接
		（3）安全连接：使用ssl，单独配置用户
			 create user 'user002'@'%' identified by 'Welcome_1';
			 grant all on *.* to 'user002'@'%';
			 alter user 'user002'@'%' require ssl;
			 
			mysql> select user,host,ssl_type,ssl_cipher from mysql.user ;
			
			mysql --ssl-ca=/usr/local/mysql/data/ca.pem \
			--ssl-cert=/usr/local/mysql/data/client-cert.pem \
			--ssl-key=/usr/local/mysql/data/client-key.pem \
			-uuser002 -p
			
	4、MySQL数据库的体系架构（服务器端）
		（1）Server层：7个主要组件
				Connectors			MySQL对外提供的交互接口
				Connection Pool		连接池
				Management Service &Tools
				SQL Interface：SQL命令行工具
				SQL Parser 查询分析器
				SQL Optimizer 优化器组件，根据数据库的统计信息（反应的是数据的分布情况）
				              基于CBO： cost based optimizer
							  基于RBO（很少用到）：rule based optimizer
				Query Cache
		
		（2）存储引擎
				（*）InnoDB：非常类似Oracle、达梦、MongoDB
				（*）MyISAM
						不支持事务，不具备ACID
						采用的表锁
						create table table1(tid int,tname varchar(10),money int) engine=myisam;
				
				（*）Memory：非常类似Redis---RDB、AOF
						create table table2(tid int,tname varchar(10),money int) engine=memory;
				
	5、多实例环境（数据库、数据库实例）：在一个宿主机上启动多个MySQL数据库实例
		应用场景（优点）：充分（节约）硬件资源
		Oracle中：RAC One Node
		
		（1）数据库和数据库实例
				（*）数据库：物理概念，硬盘上的文件（数据文件、参数文件、日志文件。。。。。）
				（*）数据库实例：逻辑概念（内存结构+进程结构）
				
		（2）使用mysqld_multi工具
			
			mysqld --initialize --user=mysql \
				--datadir=/opt/multi/data/3307 --basedir=/usr/local/mysql
	
			2022-07-10T14:07:10.617285Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: VMm9s1e-(MbY

[mysqld_multi]
mysqld=/usr/local/mysql/bin/mysqld_safe
mysqladmin=/usr/local/mysql/bin/mysqladmin

[mysqld3307]
datadir=/opt/multi/data/3307
socket=/opt/multi/data/3307/mysql_3307.sock
basedir=/usr/local/mysql
port=3307
pid-file=/opt/multi/data/3307/mysql_3307.pid
character-set-server=utf8
log-error=/opt/multi/data/3307/mysql_3307.log

[mysqld3308]
datadir=/opt/multi/data/3308
socket=/opt/multi/data/3308/mysql_3308.sock
basedir=/usr/local/mysql
port=3308
pid-file=/opt/multi/data/3308/mysql_3308.pid
character-set-server=utf8
log-error=/opt/multi/data/3308/mysql_3308.log

[mysqld3309]
datadir=/opt/multi/data/3309
socket=/opt/multi/data/3309/mysql_3309.sock
basedir=/usr/local/mysql
port=3309
pid-file=/opt/multi/data/3309/mysql_3309.pid
character-set-server=utf8
log-error=/opt/multi/data/3309/mysql_3309.log			
	

二、InnoDB存储引擎（有助于Oracle、达梦、MongoDB）

	1、存储结构：数据库都是通过逻辑存储结构管理物理存储结构
		（1）物理存储结构：硬盘上的文件
				（*）数据文件：参数datadir
					mysql> show variables like '%datadir%';
					+---------------+------------------------+
					| Variable_name | Value                  |
					+---------------+------------------------+
					| datadir       | /usr/local/mysql/data/ |
					+---------------+------------------------+
					mysql> show variables like '%per_table%';
					+-----------------------+-------+
					| Variable_name         | Value |
					+-----------------------+-------+
					| innodb_file_per_table | ON    |
					+-----------------------+-------+
				
				（*）重做日志文件：redo log，记录的是客户端的操作（事务）
						由InnoDB引擎生成
					mysql> show variables like '%log_file_size%';
					+----------------------+------------+
					| Variable_name        | Value      |
					+----------------------+------------+
					| innodb_log_file_size | 1073741824 |
					+----------------------+------------+
					1 row in set (0.01 sec)

					mysql> show variables like '%log_group%';
					+-----------------------------------------+-------+
					| Variable_name                           | Value |
					+-----------------------------------------+-------+
					| binlog_group_commit_sync_delay          | 0     |
					| binlog_group_commit_sync_no_delay_count | 0     |
					| innodb_log_group_home_dir               | ./    |
					+-----------------------------------------+-------+
					3 rows in set (0.00 sec)

					mysql> show variables like '%log_files_in_group%';
					+---------------------------+-------+
					| Variable_name             | Value |
					+---------------------------+-------+
					| innodb_log_files_in_group | 2     |
					+---------------------------+-------+
				
				（*）撤销日志文件：undo log，也叫回滚日志
						记录的是历史数据
				
				（*）参数文件：my.cnf
						两种类型：静态参数（需要重启）、动态参数（不需要重启）
				
				（*）错误日志文件：类似Oracle中告警日志
				
				
				（*）binlog二进制日志文件：由应用程序生成，执行就是SQL
						从8.0开始，binlog默认开启
						binlog记录的模式：statement、row、mixed
				
				（*）慢查询日志：诊断SQL的性能
				
				
				（*）全量日志general log：会记录select语句和show语句
				
				
		
		（2）逻辑存储结构
				表空间
				段
				区
				页（数据块）
		
	2、内存结构
	
	3、进程结构（线程结构）


三、用户管理与访问控制：用户、权限、角色role


















