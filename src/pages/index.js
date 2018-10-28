import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const IndexPage = () => {
  return (
    <Layout>
      <Container className="my-5" style={{ maxWidth: 768 }}>
        <Row className="mb-4">
          <Col>
            <h1>강희룡</h1>
            <p className="lead">
              파트타임이나 인턴 기회를 찾고 있는 그로스 마인드셋을 지닌
              다재다능한 웹 개발자입니다. 새로운 기술을 배우는 것을 좋아하고
              스타트업에 관심이 많습니다.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>연락처</h3>
            <ul class="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon icon="envelope" size="lg" className="mr-3" />
                <a href="mailto:hi@heeryongkang.me">hi@heeryongkang.me</a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  size="lg"
                  className="mr-3"
                />
                <a href="https://github.com/drakang4" target="_black">
                  github.com/drakang4
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  size="lg"
                  className="mr-3"
                />
                <a href="https://www.linkedin.com/in/drakang4" target="_black">
                  linkedin.com/in/drakang4
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>테크 스택</h3>
            <Row>
              <Col>
                <h5 className="mb-1">자바스크립트 기술</h5>
                <p>
                  ECMAScript 2018, TypeScript, React, Electron, GatsbyJS,
                  Express
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="mb-1">백엔드 기술</h5>
                <p>AWS, Go, GraphQL, MySQL. MongoDB</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="mb-1">개발 도구</h5>
                <p>Git, CI/CD, Docker</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>이력</h3>
            <Row>
              <Col>
                <h5 className="mb-0">
                  눔코리아
                  <time className="font-weight-light font-size-1 ml-2">
                    2017.11 - 2018.02
                  </time>
                </h5>
                <p>그로스 엔지니어 인턴</p>
                <ul>
                  <li>
                    구매 전환율 상승을 위해 MixPanel Funnel 데이터를 기반으로
                    A/B 테스트 설계 및 실행
                  </li>
                  <li>GatsbyJS를 이용해 실험 페이지 및 프로모션 페이지 제작</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>사이드 프로젝트</h3>
            <Row>
              <Col>
                <h5 className="mb-1">
                  Jamak: 크로스 플랫폼 자막 파일 에디터
                  <time className="font-weight-light font-size-1 ml-2">
                    In Progress
                  </time>
                </h5>
                <ul>
                  <li>Electron IPC를 활용해 메인 프로세스와 렌더러 프로세스</li>
                  <li>커뮤니케이션 Redux 기반 상태 관리</li>
                  <li>
                    WebAudio API와 Konva를 사용하여 Canvas에 오디오 데이터
                    시각화
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="mb-1">
                  GFCalendar: 아이돌 스케줄, 콘텐츠 제공 웹 앱
                  <time className="font-weight-light font-size-1 ml-2">
                    2017.03 - 2017.06
                  </time>
                </h5>
                <ul>
                  <li>
                    react-virtualized를 사용하여 많은 데이터를 효과적으로
                    렌더링할 수 있는 캘린더 컴포넌트 개발
                  </li>
                  <li>
                    Express 기반의 GraphQL 서버를 구성하고 Apollo 클라이언트에
                    연결해 데이터 fetch
                  </li>
                  <li>Redis 서버에 스케줄 및 콘텐츠 데이터 캐싱</li>
                  <li>Docker와 CircleCI를 사용하여 빌드 및 배포</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>학력</h3>
            <ul>
              <li>숭실대학교 글로벌미디어학부 17.03 - 현재 휴학중</li>
              <li>한국디지털미디어고등학교 해킹방어과 졸업 14.03 - 17.02</li>
            </ul>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <h3>블로그</h3>
            <PostList />
            <Link to="/blog">
              <Button color="primary">더보기</Button>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
