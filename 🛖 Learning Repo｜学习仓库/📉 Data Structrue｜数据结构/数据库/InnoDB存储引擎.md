---
title: InnoDB存储引擎
creation date: 2022-07-10 20:30 
status: todo
tags:
- InnoDB
- MySQL
---

# InnoDB存储引擎

>有助于 Oracle、达梦、MongoDB

## 存储结构

>数据库都是通过逻辑存储结构管理物理存储结构

### 物理存储结构：硬盘上的文件

#### 数据文件

参数datadir
```bash
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
```

#### 重做日志文件

redo log, 记录的是客户端的操作（事务）, 由InnoDB引擎生成
```bash
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
```

#### 撤销日志文件

undo log, 也叫回滚日志, 记录的是历史数据
				
#### 参数文件

my.cnf, 两种类型
- 静态参数（需要重启）
- 动态参数（不需要重启）

#### 错误日志文件

类似Oracle中告警日志


#### binlog二进制日志文件

由应用程序生成, 执行就是SQL, 从8.0开始，binlog默认开启, binlog记录的模式
- statement
- row
- mixed

#### 慢查询日志

诊断SQL的性能

#### 全量日志general log

会记录select语句和show语句


### 逻辑存储结构

- 表空间, tablespace
- 段, segment
- 区, extent
- 页(数据块), Page(block) 
```bash
show variables like 'innodb_page_size'; #Oracle的参数：block_size
```
- 行, Row


## 内存结构


## 进程结构 (线程结构)
