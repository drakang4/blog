import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import PostPreview from './PostPreview';
import ResumePreview from './ResumePreview';

import styles from './previewStyles.css';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle(styles);

CMS.registerPreviewTemplate('post', PostPreview);
CMS.registerPreviewTemplate('resume', ResumePreview);

CMS.init();
