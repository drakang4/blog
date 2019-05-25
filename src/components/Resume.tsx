import React from 'react';
import humanizeUrl from 'humanize-url';
import Icon from './Icon';
import { formatDuration } from '../utils/i18n';
import { Resume as ResumeData } from '../types';

const Section: React.FC = ({ children, ...props }) => (
  <section {...props} className="mb5">
    {children}
  </section>
);

const SectionHeading: React.FC = ({ children, ...props }) => (
  <h2 {...props} className="f2 fw7 mv3">
    {children}
  </h2>
);

const Ul: React.FC = ({ children, ...props }) => (
  <ul {...props} className="pl4 mt3 mb4">
    {children}
  </ul>
);

const Li: React.FC = ({ children, ...props }) => (
  <li {...props} className="mv2">
    {children}
  </li>
);

type Props = {
  data: ResumeData;
};

const Resume: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Section>
        <h1 className="f-headline lh-solid fw9 mv3 near-black">{data.name}</h1>
        <p className="f4 fw3 lh-copy mv3">{data.summary}</p>
      </Section>
      <Section>
        <SectionHeading>연락처</SectionHeading>
        <Ul>
          {data.contacts.map(contact => (
            <Li key={contact.network}>
              <Icon name={contact.icon} className="mr2 f4" />
              <a href={contact.url} className="link dim blue v-mid no-reformat">
                {humanizeUrl(contact.url)}
              </a>
            </Li>
          ))}
        </Ul>
      </Section>
      <Section>
        <SectionHeading>테크 스택</SectionHeading>
        {data.skills.map(skill => (
          <div key={skill.name} className="mv3">
            <h3 className="mv3 f4 fw5">{skill.name}</h3>
            <p className="mv2">{skill.keywords.join(', ')}</p>
          </div>
        ))}
      </Section>
      <Section>
        <SectionHeading>이력</SectionHeading>
        {data.works.map(work => (
          <div key={work.company} className="mv3">
            <h3 className="mv1 f4 fw5">
              <a
                href={work.website}
                target="_blank"
                rel="noopener noreferrer"
                className="link dim dark-gray"
              >
                {work.company}
                <Icon name="open-in-new" className="ml2 blue no-print" />
              </a>
            </h3>
            <span className="f5 mr2">{work.role}</span>
            <span className="f6">
              {formatDuration(work.startDate, work.endDate)}
            </span>
            <Ul>
              {work.highlights.map(highlight => (
                <Li key={highlight}>{highlight}</Li>
              ))}
            </Ul>
          </div>
        ))}
      </Section>
      <Section>
        <SectionHeading>사이드 프로젝트</SectionHeading>
        {data.projects.map(project => (
          <div key={project.name}>
            <h3 className="mv1 f4 fw5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link dim dark-gray"
              >
                {project.name}
                <Icon name="open-in-new" className="ml2 blue no-print" />
              </a>
            </h3>
            <span className="font-weight-light font-size-1 ml-2">
              {formatDuration(project.startDate, project.endDate)}
            </span>
            <Ul>
              {project.highlights.map(highlight => (
                <Li key={highlight}>{highlight}</Li>
              ))}
            </Ul>
          </div>
        ))}
      </Section>
      <Section>
        <SectionHeading>학력</SectionHeading>
        {data.educations.map(education => (
          <div key={education.school} className="mv3">
            <h3 className="mv1 f4 fw5">{education.school}</h3>
            <span className="f5 mr2">
              {education.faculty} {education.studyType}
            </span>
            <span className="f6">
              {formatDuration(education.startDate, education.endDate)}
            </span>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Resume;
