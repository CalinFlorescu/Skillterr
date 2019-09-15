drop table UserCv;

create table `Users` ( 
	id int(20) NOT NULL auto_increment,
    email varchar(255) not null,
    username varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    gender enum('M', 'F', 'X'),
    city varchar(255),
    state varchar(255),
    country varchar(255),
    profile_picture_url varchar(255),
    date_created DATE not null,
    active enum('yes', 'no') not null default'no',
    activation_key varchar(255) not null,
    salt_value varchar(255) not null,
    hashcode_value varchar(255) not null,
    description text,
    availability varchar(255) not null,
    primary key (id),
    unique key email (email),
    unique key username (username),
    unique key activation_key (activation_key),
    unique key salt_value (salt_value),
    unique key hashcode_value (hashcode_value)
);

create table `UserCvs` (
	id int(20) not null auto_increment,
    user_id int(20) not null,
    skills varchar(255) not null,
    workplace_role varchar(255) not null,
    languages varchar(255) not null,
    primary key (id),
    foreign key (user_id) references Users(id)
);

create table `Posts` (
	id int(20) not null auto_increment,
    user_id int(20) not null,
    description text not null,
    title varchar(255) not null,
    post_type enum('asking', 'applying') not null,
    tags varchar(255),
    price int(20),
    date_created DATE not null,
    primary key (id),
    foreign key (user_id) references Users(id)
);

create table `Followings` (
	user_id int(20) not null,
    id int(20) not null,
    date_created date not null,
    primary key (id, user_id),
    foreign key (user_id) references Users(id),
    foreign key (id) references Users(id)
);

create table `Likes` (
	user_id int(20) not null,
    post_id int(20) not null,
    date_created date not null,
    primary key (user_id, post_id),
    foreign key (post_id) references Posts(id),
    foreign key (user_id) references Users(id)
);

create table `Messages` (
	id int(20) not null,
    user_id_from int(20) not null,
    user_id_to int(20) not null,
    content text not null,
    date_created date not null,
    primary key (id),
    foreign key (user_id_from) references Users(id),
    foreign key (user_id_to) references Users(id)
);

create table `Comments` (
	id int(20) not null auto_increment,
    user_id int(20) not null,
    post_id int(20) not null,
    content text not null,
    date_created date not null,
    date_updated date,
    primary key (id),
    foreign key (post_id) references Posts(id),
    foreign key (user_id) references User(id)
)
