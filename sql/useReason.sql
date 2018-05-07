-- Create table sql --
drop table use_reason;
drop table user_demographics;

create table user_demographics (
  timestamp timestamp,
  age smallint,
  sex varchar(15),
  race varchar,
  zip integer,
  family_history boolean,
  research_interest boolean,
  memory_complaints boolean,
  other_reason_select boolean,
  other_reason_text varchar
);

select * from user_demographics;