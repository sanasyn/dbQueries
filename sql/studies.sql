drop table public.studies;

create table public.studies (
    nct_id varchar,
    nlm_download_date_description varchar, 
    first_received_date date,
    last_changed_date date,
    first_recieved_results_date date,
    received_results_deposit_date date,
    study_first_submitted_date date,
    results_first_submitted_date date,
    disposition_first_submitted_date date,
    last_update_submitted_date date,
    study_first_submitted_qc_date date,
    study_first_posted_date date,
    study_first_psot_date_type varchar,
    results_first_submitted_qc_date date,
    results_first_posted_date date,
    results_first_posted_date_type varchar,
    disposition_first_submitted_qc_date date,
    disposition_first_posted_date date,
    disposition_first_posted_date_type varchar,
    last_update_submitted_qc_date date,
    last_update_posted_date date,
    last_update_posted_date_type varchar,
    start_month_year varchar,
    start_date_type varchar,
    start_date date,
    verification_month_year varchar,
    verification_date date,
    completion_month_year varchar,
    completion_date_type varchar,
    completion_date date,
    primary_completion_month_year varchar,
    primary_completion_date_type varchar,
    primary_completion_date date,
    target_duration varchar,
    study_type varchar,
    acronym varchar,
    baseline_population varchar,
    brief_title varchar,
    official_title varchar,
    overall_status varchar,
    last_known_status varchar,
    phase varchar,
    enrollment integer,
    enrollment_type varchar,
    source varchar,
    limitations_and_caveats varchar,
    number_of_arms integer,
    number_of_groups integer,
    why_stopped integer,
    has_expanded_access boolean,
    expanded_access_type boolean,
    expanded_access_type_intermediate boolean,
    expanded_access_type_treatment boolean,
    has_dmc boolean,
    is_fda_regulated_drug boolean,
    is_fda_regulated_device boolean,
    is_unapproved_device boolean,
    is_ppsd boolean,
    is_us_export boolean,
    biospec_retention varchar,
    biospec_description varchar,
    plan_to_share_ipd varchar,
    plan_to_share_ipd_description varchar,
    created_at timestamp,
    updated_at timestamp
);

select * from public.studies;