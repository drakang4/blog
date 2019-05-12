import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import { SiteMetaData } from '../types';

const Section: React.FC = ({ children, ...props }) => (
  <section {...props} className="mb5">
    {children}
  </section>
);

const SectionHeading: React.FC = ({ children, ...props }) => (
  <h2 {...props} className="f2 fw7 mb2">
    {children}
  </h2>
);

const Ul: React.FC = ({ children, ...props }) => (
  <ul {...props} className="pl4 mv3">
    {children}
  </ul>
);

const Li: React.FC = ({ children, ...props }) => (
  <li {...props} className="mv2">
    {children}
  </li>
);

type Props = {
  data: {
    site: {
      siteMetadata: SiteMetaData;
    };
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;
  const { siteUrl } = siteMetadata;

  return (
    <Layout>
      <Helmet>
        <title>강희룡</title>
        <meta
          name="description"
          content="호기심 많은 웹 개발자입니다. 새로운 기술을 배우는 것을 좋아해 다재다능한 제너럴리스트가 되기 위해 노력하며 스타트업에 관심이 많습니다."
        />
        <link rel="canonical" href={siteUrl} />
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="강희룡" />
        <meta
          property="og:description"
          content="호기심 많은 웹 개발자입니다. 새로운 기술을 배우는 것을 좋아해 다재다능한 제너럴리스트가 되기 위해 노력하며 스타트업에 관심이 많습니다."
        />
      </Helmet>

      <div className="center mw7 ph3 mv4 mv6-ns dark-gray">
        <Section>
          <h1 className="f-headline lh-solid fw9 mv0 near-black">강희룡</h1>
          <p className="f4 fw3 lh-copy">
            호기심 많은 웹 개발자입니다. 새로운 기술을 배우는 것을 좋아해
            다재다능한 제너럴리스트가 되기 위해 노력하며 스타트업에 관심이
            많습니다.
          </p>
        </Section>
        <Section>
          <SectionHeading>연락처</SectionHeading>
          <Ul>
            <Li>
              <FontAwesomeIcon
                icon="envelope"
                size="lg"
                fixedWidth
                className="mr2"
              />
              <a href="mailto:hi@heeryongkang.me" className="link dim blue">
                hi@heeryongkang.me
              </a>
            </Li>
            <Li>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="lg"
                fixedWidth
                className="mr2"
              />
              <a
                href="https://github.com/drakang4"
                target="_blank"
                rel="noopener noreferrer"
                className="link dim blue"
              >
                github.com/drakang4
              </a>
            </Li>
            <Li>
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                size="lg"
                fixedWidth
                className="mr2"
              />
              <a
                href="https://www.linkedin.com/in/drakang4"
                target="_blank"
                rel="noopener noreferrer"
                className="link dim blue"
              >
                linkedin.com/in/drakang4
              </a>
            </Li>
          </Ul>
        </Section>
        <Section>
          <SectionHeading>테크 스택</SectionHeading>
          <div>
            <h3 className="mb1 f4 fw5">프론트엔드 기술</h3>
            <p>ECMAScript 2018, TypeScript, React, Electron, GatsbyJS</p>
          </div>
          <div>
            <h3 className="mb1 f4 fw5">백엔드 기술</h3>
            <p>AWS, Express, Go, GraphQL, MySQL, MongoDB</p>
          </div>
          <div>
            <h3 className="mb1 f4 fw5">개발 도구</h3>
            <p>Git, CI/CD, Docker</p>
          </div>
        </Section>
        <Section>
          <SectionHeading>이력</SectionHeading>
          <div className="">
            <h3 className="mb1 f4 fw5">스타일쉐어</h3>
            <span className="f5 mr2">그로스 엔지니어</span>
            <span className="f6">2018.11 - Present</span>
            <Ul />
          </div>
          <div className="">
            <h3 className="mb1 f4 fw5">눔코리아</h3>
            <span className="f5 mr2">그로스 엔지니어 인턴</span>
            <span className="f6">2017.11 - 2018.02</span>
            <Ul>
              <Li>
                구매 전환율 상승을 핵심 목표로 MixPanel Funnel 데이터를 기반으로
                A/B 테스트 설계 및 실행
              </Li>
              <Li>GatsbyJS를 이용해 실험 페이지 및 프로모션 페이지 제작</Li>
            </Ul>
          </div>
        </Section>
        <Section>
          <SectionHeading>사이드 프로젝트</SectionHeading>
          <div>
            <h3>
              <a
                href="https://github.com/drakang4/jamak"
                target="_blank"
                rel="noopener noreferrer"
                className="link dim dark-gray"
              >
                Jamak: 크로스 플랫폼 자막 파일 에디터
                <FontAwesomeIcon
                  title="Link to github"
                  icon="external-link-alt"
                  size="sm"
                  className="ml2 d-print-none blue"
                />
              </a>
            </h3>
            <span className="font-weight-light font-size-1 ml-2">
              In Progress
            </span>
            <Ul>
              <Li>Electron IPC를 활용한 프로세스 커뮤니케이션</Li>
              <Li>Redux 기반 상태 관리</Li>
              <Li>
                WebAudio API와 Canvas 라이브러리 Konva를 사용하여 오디오 웨이브
                폼 시각화
              </Li>
            </Ul>
          </div>
          <div>
            <h3>
              <a
                href="https://github.com/drakang4/gfcalendar-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="link dim dark-gray"
              >
                GFCalendar: 아이돌 스케줄, 콘텐츠 제공 웹 앱
                <FontAwesomeIcon
                  title="Link to github"
                  icon="external-link-alt"
                  size="sm"
                  className="ml2 d-print-none blue"
                />
              </a>
            </h3>
            <span className="font-weight-light font-size-1 ml-2">
              2017.03 - 2017.06
            </span>
            <Ul>
              <Li>
                react-virtualized를 사용하여 많은 데이터를 효과적으로 렌더링할
                수 있는 캘린더 컴포넌트 개발
              </Li>
              <Li>
                Express 기반의 GraphQL 서버를 구성하고 Apollo 클라이언트에
                연결해 데이터 fetch
              </Li>
              <Li>Redis 서버에 스케줄 및 콘텐츠 데이터 캐싱</Li>
              <Li>Docker와 CircleCI를 사용한 빌드 및 배포</Li>
            </Ul>
          </div>
        </Section>
        <Section>
          <SectionHeading>학력</SectionHeading>
          <Ul>
            <Li>
              숭실대학교 글로벌미디어학부
              <i>17.03 - 휴학중</i>
            </Li>
            <Li>
              한국디지털미디어고등학교 해킹방어과 졸업
              <i>14.03 - 17.02</i>
            </Li>
          </Ul>
        </Section>
        {/* <Row>
            <Col>
              <h3>블로그</h3>
              <PostList />
              <Link to="/blog">
                <Button color="primary">더보기</Button>
              </Link>
            </Col>
          </Row> */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
