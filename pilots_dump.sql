--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pilots; Type: TABLE; Schema: public; Owner: brandan
--

CREATE TABLE public.pilots (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    date_of_birth date NOT NULL
);


ALTER TABLE public.pilots OWNER TO brandan;

--
-- Name: pilots_id_seq; Type: SEQUENCE; Schema: public; Owner: brandan
--

CREATE SEQUENCE public.pilots_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pilots_id_seq OWNER TO brandan;

--
-- Name: pilots_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandan
--

ALTER SEQUENCE public.pilots_id_seq OWNED BY public.pilots.id;


--
-- Name: pilots id; Type: DEFAULT; Schema: public; Owner: brandan
--

ALTER TABLE ONLY public.pilots ALTER COLUMN id SET DEFAULT nextval('public.pilots_id_seq'::regclass);


--
-- Data for Name: pilots; Type: TABLE DATA; Schema: public; Owner: brandan
--

COPY public.pilots (id, first_name, last_name, date_of_birth) FROM stdin;
1	Elena	Rodriguez	1990-11-23
2	Michael	Smith	1988-02-10
3	Jessica	Johnson	1992-05-14
4	David	Williams	1985-08-23
5	Emily	Jones	1990-12-19
6	Robert	Brown	1989-07-04
7	Sarah	Davis	1993-03-11
8	William	Miller	1986-10-17
9	Emma	Garcia	1995-04-26
10	John	Rodriguez	1984-09-12
11	Olivia	Martinez	1991-06-28
12	Christopher	Hernandez	1987-11-09
13	Ava	Lopez	1994-01-30
14	Daniel	Gonzalez	1988-05-05
15	Sophia	Perez	1992-08-15
16	Matthew	Wilson	1986-12-21
\.


--
-- Name: pilots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandan
--

SELECT pg_catalog.setval('public.pilots_id_seq', 16, true);


--
-- Name: pilots pilots_pkey; Type: CONSTRAINT; Schema: public; Owner: brandan
--

ALTER TABLE ONLY public.pilots
    ADD CONSTRAINT pilots_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

