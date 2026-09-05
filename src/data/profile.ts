import type { ImageMetadata } from 'astro';
import profileImage from '~/assets/photo/profile.jpeg';
import igLogo from '~/assets/logos/ig.png';
import bppLogo from '~/assets/logos/bpp.png';
import precisLogo from '~/assets/logos/precis-digital.jpg';
import hiitTheBeatLogo from '~/assets/logos/hiit-the-beat.png';

export interface ContactLink {
  kind: string;
  value: string;
  href: string;
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
  courses?: string[];
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

export interface CertificationEntry {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  expired?: boolean;
  credentialId?: string;
  skills?: string[];
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
  certifications: CertificationEntry[];
  interests?: string;
}

// Sticky top bar (location + live clock) is off by default per the brief — flip to enable.
export const showStickyHeader = false;

export const profile: Profile = {
  name: 'Nikita Chistyakov',
  role: 'Senior Analytics Engineer',
  location: 'London, UK',
  photo: profileImage,
  about:
    'Senior Analytics Engineer with 5+ years architecting dbt-based data platforms on GCP/AWS. Partners directly with finance, product, commercial and marketing leadership to turn raw data into trusted, self-serve products.',

  contact: [
    { kind: 'Email', value: 'chistyakov97@gmail.com', href: 'mailto:chistyakov97@gmail.com' },
    { kind: 'LinkedIn', value: 'linkedin.com/nikitachistyakov', href: 'https://linkedin.com/in/nikitachistyakov' },
    { kind: 'GitHub', value: 'github.com/n-chistyakov', href: 'https://github.com/n-chistyakov' },
  ],

  experience: [
    {
      company: 'IG Group',
      logo: igLogo,
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
      logo: bppLogo,
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
      logo: precisLogo,
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
      logo: hiitTheBeatLogo,
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
    {
      degree: 'MSc Digital Marketing Science',
      institution: 'Royal Holloway University',
      year: '2021–2022',
      courses: ['Marketing Analytics', 'Consumer Data & Behaviour', 'Digital Strategy', 'Web & Social Analytics'],
    },
    {
      degree: 'MA Global Management',
      institution: 'University of Applied Sciences Hof',
      year: '2019–2021',
      courses: ['Business Analytics', 'Data-Driven Decision Making', 'Strategic Management', 'International Finance'],
    },
    {
      degree: 'BSc Economics',
      institution: 'Plekhanov Russian University',
      year: '2015–2019',
      courses: ['Statistics', 'Mathematics', 'Econometrics', 'Theory of Probability'],
    },
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

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issued: 'Feb 2026',
      expires: 'Feb 2029',
      skills: ['Amazon Web Services (AWS)'],
    },
    {
      name: 'Git Essential Training',
      issuer: 'LinkedIn',
      issued: 'Jan 2025',
      skills: ['Git'],
    },
    {
      name: 'dbt Fundamentals',
      issuer: 'dbt Labs',
      issued: 'Aug 2025',
      skills: ['dbt'],
    },
    {
      name: 'Intermediate Python',
      issuer: 'DataCamp',
      issued: 'Jun 2024',
      skills: ['Python (Programming Language)'],
    },
    {
      name: 'Alteryx Designer Core Certification',
      issuer: 'Alteryx',
      issued: 'Nov 2023',
      expires: 'Nov 2025',
      expired: true,
      skills: ['Alteryx'],
    },
    {
      name: 'Google Analytics Individual Qualification',
      issuer: 'Google',
      issued: 'Mar 2022',
      expires: 'Mar 2023',
      expired: true,
      credentialId: '109662730',
      skills: ['Google Analytics'],
    },
  ],

  interests:
    'Outside of work, I ride a classic Royal Enfield 650 motorbike and play tennis. I’m a happy owner of dachshund - keeps me company on bike trips. Lastly, I like to think I can cook - I’ve perfected salmon and rice over time, though my real specialty is tomato salad.',
};
