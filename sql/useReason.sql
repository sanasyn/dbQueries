-- Create table sql --
drop table use_reason;

create table use_reason (
  family_history boolean,
  research_interest boolean,
  memory_complaints boolean,
  other boolean,
  other_reason varchar
);

select * from use_reason;