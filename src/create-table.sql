CREATE TABLE public.history_query (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	lat varchar NULL,
	lon varchar NULL,
	city varchar NULL,
	pollution_data json NULL,
	datetime varchar NULL
);


CREATE TABLE public.users (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	login varchar NULL,
	"password" varchar NULL,
	email varchar NULL
);

INSERT INTO users (login,password,email) VALUES('ramil123','ramil','ram@');