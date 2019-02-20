import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Box, Heading, Text, Link } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';

const SectionHeading = (props: any) => (
  <Heading {...props} as="h2" fontSize={5} fontWeight={500} mb={2} />
);

type Props = {
  data: any;
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

      <Box px={3} mx="auto" my={5} css={{ maxWidth: '768px' }}>
        <Box mb={4}>
          <Heading as="h1" fontSize={6}>
            강희룡
          </Heading>
          <Text fontSize={3} fontWeight={300}>
            호기심 많은 웹 개발자입니다. 새로운 기술을 배우는 것을 좋아해
            다재다능한 제너럴리스트가 되기 위해 노력하며 스타트업에 관심이
            많습니다.
          </Text>
        </Box>
        <Box mb={4}>
          <SectionHeading>연락처</SectionHeading>
          <Box as="ul">
            <li className="mb-3">
              <FontAwesomeIcon
                icon="envelope"
                size="lg"
                fixedWidth
                className="mr-3"
              />
              <Link href="mailto:hi@heeryongkang.me">hi@heeryongkang.me</Link>
            </li>
            <li className="mb-3">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="lg"
                fixedWidth
                className="mr-3"
              />
              <Link
                href="https://github.com/drakang4"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/drakang4
              </Link>
            </li>
            <li className="mb-3">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                size="lg"
                fixedWidth
                className="mr-3"
              />
              <Link
                href="https://www.linkedin.com/in/drakang4"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/drakang4
              </Link>
            </li>
          </Box>
        </Box>
        <Box mb={4}>
          <SectionHeading>테크 스택</SectionHeading>
          <Box>
            <Heading as="h3" mb={1} fontSize={3} fontWeight={500}>
              프론트엔드 기술
            </Heading>
            <Text>ECMAScript 2018, TypeScript, React, Electron, GatsbyJS</Text>
          </Box>
          <Box>
            <Heading as="h3" mb={1} fontSize={3} fontWeight={500}>
              백엔드 기술
            </Heading>
            <Text>AWS, Express, Go, GraphQL, MySQL, MongoDB</Text>
          </Box>
          <Box>
            <Heading as="h3" mb={1} fontSize={3} fontWeight={500}>
              개발 도구
            </Heading>
            <Text>Git, CI/CD, Docker</Text>
          </Box>
        </Box>
        <Box mb={4}>
          <SectionHeading>이력</SectionHeading>
          <Box>
            <Heading as="h3" fontSize={3} fontWeight={500}>
              스타일쉐어
            </Heading>
            <Text as="span" fontSize={2} mr={2}>
              그로스 엔지니어
            </Text>
            <Text as="span" fontSize={1}>
              2018.11 - Present
            </Text>
            <ul />
          </Box>
          <Box>
            <Heading as="h3" fontSize={3} fontWeight={500}>
              눔코리아
            </Heading>
            <Text as="span" fontSize={2} mr={2}>
              그로스 엔지니어 인턴
            </Text>
            <Text as="span" fontSize={1}>
              2017.11 - 2018.02
            </Text>
            <ul>
              <li>
                구매 전환율 상승을 핵심 목표로 MixPanel Funnel 데이터를 기반으로
                A/B 테스트 설계 및 실행
              </li>
              <li>GatsbyJS를 이용해 실험 페이지 및 프로모션 페이지 제작</li>
            </ul>
          </Box>
        </Box>
        <Box mb={4}>
          <SectionHeading>사이드 프로젝트</SectionHeading>
          <Box>
            <Heading as="h3">
              Jamak: 크로스 플랫폼 자막 파일 에디터
              <Link
                href="https://github.com/drakang4/jamak"
                target="_blank"
                rel="noopener noreferrer"
                ml={2}
              >
                <FontAwesomeIcon
                  title="Link to github"
                  icon="external-link-alt"
                  size="sm"
                  className="d-print-none"
                />
              </Link>
            </Heading>
            <span className="font-weight-light font-size-1 ml-2">
              In Progress
            </span>
            <ul>
              <li>Electron IPC를 활용한 프로세스 커뮤니케이션</li>
              <li>Redux 기반 상태 관리</li>
              <li>
                WebAudio API와 Canvas 라이브러리 Konva를 사용하여 오디오 웨이브
                폼 시각화
              </li>
            </ul>
          </Box>
          <Box>
            <Heading as="h3">
              GFCalendar: 아이돌 스케줄, 콘텐츠 제공 웹 앱{' '}
              <Link
                href="https://github.com/drakang4/gfcalendar-demo"
                target="_blank"
                rel="noopener noreferrer"
                ml={2}
              >
                <FontAwesomeIcon
                  title="Link to github"
                  icon="external-link-alt"
                  size="sm"
                  className="d-print-none"
                />
              </Link>
            </Heading>
            <span className="font-weight-light font-size-1 ml-2">
              2017.03 - 2017.06
            </span>
            <ul>
              <li>
                react-virtualized를 사용하여 많은 데이터를 효과적으로 렌더링할
                수 있는 캘린더 컴포넌트 개발
              </li>
              <li>
                Express 기반의 GraphQL 서버를 구성하고 Apollo 클라이언트에
                연결해 데이터 fetch
              </li>
              <li>Redis 서버에 스케줄 및 콘텐츠 데이터 캐싱</li>
              <li>Docker와 CircleCI를 사용한 빌드 및 배포</li>
            </ul>
          </Box>
        </Box>
        <Box mb={4}>
          <SectionHeading>학력</SectionHeading>
          <ul>
            <li>
              숭실대학교 글로벌미디어학부
              <Text>17.03 - 휴학중</Text>
            </li>
            <li>
              한국디지털미디어고등학교 해킹방어과 졸업
              <Text>14.03 - 17.02</Text>
            </li>
          </ul>
        </Box>
        {/* <Row>
            <Col>
              <h3>블로그</h3>
              <PostList />
              <Link to="/blog">
                <Button color="primary">더보기</Button>
              </Link>
            </Col>
          </Row> */}
      </Box>
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
