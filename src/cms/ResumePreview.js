import React from 'react';
import Resume from '../components/Resume';

const ResumePreview = ({ entry }) => {
  return (
    <div className="pa3">
      <Resume
        data={{
          lang: entry.getIn(['data', 'lang']),
          name: entry.getIn(['data', 'name']),
          summary: entry.getIn(['data', 'summary']),
          contacts: entry.getIn(['data', 'contacts']).toJS(),
          skills: entry.getIn(['data', 'skills']).toJS(),
          works: entry.getIn(['data', 'works']).toJS(),
          projects: entry.getIn(['data', 'projects']).toJS(),
          educations: entry.getIn(['data', 'educations']).toJS(),
        }}
      />
    </div>
  );
};

export default ResumePreview;
