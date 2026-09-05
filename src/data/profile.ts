import type { ImageMetadata } from 'astro';

export interface ContactLink {
  label: string;
  href: string;
  icon: 'email' | 'linkedin' | 'github';
}

export interface ExperienceBullet {
  lead: string;
  text: string;
}

export interface ExperienceEntry {
  company: string;
  logo?: ImageMetadata;
  /** Fallback badge color while no real logo asset exists — see the assets checkpoint. */
  badgeColor: string;
  role: string;
  location?: string;
  dateStart: string;
  dateEnd: string;
  bullets: ExperienceBullet[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  /** No per-degree description was supplied in the brief — omitted rather than fabricated. */
  description?: string;
}

export interface ToolIcon {
  label: string;
  icon: string;
}

export interface ProjectEntry {
  title: string;
  href: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  photo?: ImageMetadata;
  about: string;
  contact: ContactLink[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];
  tools: ToolIcon[];
  projects: ProjectEntry[];
  interests?: string[];
}

// Sticky top bar (location + live clock) is off by default per the brief — flip to enable.
export const showStickyHeader = false;

export const profile: Profile = {
  name: 'Nikita Chistyakov',
  role: 'Senior Analytics Engineer',
  location: 'London, UK',
  about:
    'Senior Analytics Engineer with 5+ years architecting dbt-based data platforms on GCP/AWS. Partners directly with finance, product, commercial and marketing leadership to turn raw data into trusted, self-serve products.',

  contact: [
    { label: 'chistyakov97@gmail.com', href: 'mailto:chistyakov97@gmail.com', icon: 'email' },
    { label: 'linkedin.com/nikitachistyakov', href: 'https://linkedin.com/in/nikitachistyakov', icon: 'linkedin' },
    { label: 'github.com/n-chistyakov', href: 'https://github.com/n-chistyakov', icon: 'github' },
  ],

  experience: [
    {
      company: 'IG Group',
      badgeColor: '#E4002B',
      role: 'Analytics Engineer',
      location: 'London, UK',
      dateStart: '2025',
      dateEnd: 'Present',
      bullets: [
        {
          lead: 'Architected Gold layer data model and established dbt best practices',
          text: 'adopted by 9 analysts & engineers across 3 teams.',
        },
        {
          lead: 'Owned 4 operational data pipelines powering self-serve data products,',
          text: 'including client contact data reaching 2 million customers and CEO-level reporting.',
        },
        {
          lead: 'Drove end-to-end delivery and set technical direction for dbt models',
          text: 'across revenue, client, trade and funding domains, acting as the primary technical stakeholder for commercial and product teams.',
        },
        {
          lead: 'Defined and led the data quality strategy',
          text: 'that lifted Gold model attribute completeness from 20% to 99%.',
        },
        {
          lead: 'Mentored 7 data analysts on dbt, Git and CI/CD',
          text: 'through hands-on workshops and PR reviews.',
        },
      ],
    },
    {
      company: 'BPP',
      badgeColor: '#0F172A',
      role: 'Product Analyst',
      location: 'London, UK',
      dateStart: '2023',
      dateEnd: '2025',
      bullets: [
        {
          lead: 'Built and maintained ETL pipelines',
          text: 'across GA4 → BigQuery → dbt → Power BI.',
        },
        {
          lead: 'Architected dbt-style transformation layers',
          text: 'in Snowflake and BigQuery to serve downstream BI.',
        },
        {
          lead: 'Improved BigQuery query performance by 40%',
          text: 'through partitioning and tuning.',
        },
        {
          lead: 'Improved data reliability',
          text: 'by resolving null/duplicate issues and fixing GA–Snowflake join accuracy.',
        },
        {
          lead: 'Built a Python (pandas + OpenAI) pipeline',
          text: 'for automated lead-quality text mining.',
        },
      ],
    },
    {
      company: 'Precis Digital',
      badgeColor: '#7C3AED',
      role: 'Digital Analyst',
      location: 'London, UK',
      dateStart: '2022',
      dateEnd: '2023',
      bullets: [
        {
          lead: 'Managed analytics infrastructure across Google, Meta, Bing and Pinterest,',
          text: 'consolidating reporting into unified SQL pipelines.',
        },
        {
          lead: 'Built and maintained SQL-driven ETL pipelines',
          text: 'feeding Looker dashboards across 3 client accounts.',
        },
        {
          lead: 'Diagnosed and resolved data pipeline inconsistencies,',
          text: 'improving reporting reliability.',
        },
      ],
    },
    {
      company: 'HIIT the Beat by Breakletics',
      badgeColor: '#F59E0B',
      role: 'Data Analyst',
      location: 'Remote',
      dateStart: '2021',
      dateEnd: '2022',
      bullets: [
        {
          lead: 'Automated weekly reporting pipeline',
          text: 'using Airflow & BigQuery, replacing manual reporting.',
        },
        {
          lead: 'Implemented end-to-end web tracking (GTM, GA)',
          text: 'to capture conversion and sales data at source.',
        },
        {
          lead: 'Designed a Looker dashboard suite',
          text: 'covering weekly/monthly/quarterly conversion and sales metrics.',
        },
      ],
    },
  ],

  education: [
    { degree: 'MSc Digital Marketing Science', institution: 'Royal Holloway University', year: '2021–2022' },
    { degree: 'MA Global Management', institution: 'University of Applied Sciences Hof', year: '2019–2021' },
    { degree: 'BSc Economics', institution: 'Plekhanov Russian University', year: '2015–2019' },
  ],

  skills: ['SQL', 'Python', 'dbt', 'GCP', 'AWS', 'BigQuery', 'Snowflake', 'Airflow', 'Terraform', 'Looker', 'Power BI'],

  tools: [
    { label: 'SQL', icon: 'sql' },
    { label: 'Python', icon: 'python' },
    { label: 'dbt', icon: 'dbt' },
    { label: 'GCP', icon: 'gcp' },
    { label: 'AWS', icon: 'aws' },
    { label: 'BigQuery', icon: 'bigquery' },
    { label: 'Snowflake', icon: 'snowflake' },
    { label: 'Airflow', icon: 'airflow' },
    { label: 'Terraform', icon: 'terraform' },
    { label: 'Looker', icon: 'looker' },
    { label: 'Power BI', icon: 'powerbi' },
  ],

  projects: [
    {
      title: 'F1 ETL Pipeline',
      // TODO: confirm actual repo URL.
      href: 'https://github.com/n-chistyakov/REPLACE',
      description:
        'Python-based ETL pipeline ingesting Formula 1 data from public APIs, modelled for relational storage in PostgreSQL on AWS RDS. Automated daily refresh via AWS Lambda, with Looker Studio dashboards for race insights.',
    },
    {
      title: 'NYC Schools Analysis',
      // TODO: confirm actual repo URL.
      href: 'https://github.com/n-chistyakov/REPLACE',
      description:
        'Cleaned and transformed NYC SAT datasets in pandas, analysing school-level and borough-level performance patterns.',
    },
  ],

  interests: [
    'Motorbikes — rides a Royal Enfield 650',
    'Tennis',
    'Cooking (salmon & rice is the reliable one, tomato salad is the specialty)',
    'Dachshund co-pilot on bike trips',
  ],
};
