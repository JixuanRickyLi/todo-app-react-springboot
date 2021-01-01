CREATE TABLE `todo`
(
 `id`   int not null,
 `username` varchar(64) not null,
 `description` varchar(512) not null,
 `target_date` varchar(128) not null,
 `is_completed` int not null default 0,
 primary key (`id`)
);