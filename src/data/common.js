// src/data/projects.js

export const EXP = [
  {
    company: '라드씨엔에스',
    title: 'Software Developer',
    period: '2024.03 – 현재',
    summary:
        'Spring Boot + React 기반의 웹 시스템 신규 구축 및 차세대 서비스 고도화 중심으로 풀스택 개발을 수행했습니다.',
    bullets: [
      'CJ CGV 차세대 시스템(온모바일) FE 신규개발 및 결함처리 (스토어/액티비티/씨네톡)',
      'KT 통합 재고관리시스템(TAMS) 웹사이트 기능개선 및 Oracle 기반 데이터 처리 로직 구현',
      '한살림 리뉴얼 고도화 — Vue → React 전환 및 관리자페이지 UX 개선, API 연동 구조 리팩토링',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Spring Boot',
      'MyBatis',
      'Oracle',
      'TailwindCSS',
    ],
  },
  {
    company: '미르인컴',
    title: 'Web Developer',
    period: '2022.02 – 2023.06',
    summary:
        '대기업 및 공공기관 사이트 리뉴얼/유지보수 프로젝트 다수 참여. JSP 기반 백엔드와 프론트엔드 연동 구조 개선 담당.',
    bullets: [
      '현대해상 TMS 관리자 시스템 — Spring MVC + JSP 연동 및 화면단 로직 개발',
      '국방부 사이트 리뉴얼 — 기존 UI 리팩토링 및 반응형 구조 개선',
      '한솔 신기한 나라(Live/관리자) — Thymeleaf + JavaScript 기반 콘텐츠 수정 및 유지보수',
    ],
    tags: ['Java', 'Spring MVC', 'JSP', 'Oracle', 'JSTL', 'JavaScript', 'jQuery'],
  },
  {
    company: '에스엔비플러스',
    title: 'Web Developer',
    period: '2020.11 – 2021.12',
    summary:
        '공공기관 시스템 신규 구축 및 유지보수 프로젝트에서 JSP 기반의 백엔드와 DB 연동을 담당했습니다.',
    bullets: [
      '공정 경쟁 지원 시스템 — 신규 구축 및 데이터 관리 기능 개발',
      '콘텐츠분쟁조정위원회 — 유지보수 및 기능개선, 보고서 처리 프로세스 개선',
      '국립국어원 한국어 교원 리뉴얼 — Cubrid DB 기반의 리뉴얼 및 UI 개선',
    ],
    tags: ['Java', 'Spring Framework', 'MyBatis', 'JSP', 'MySQL', 'HTML', 'CSS', 'JSTL'],
  },
]


export const TECHS = [
  { name: 'React', desc: '컴포넌트 기반 UI 라이브러리' },
  { name: 'Next.js', desc: 'SSR/ISR 지원 프레임워크' },
  { name: 'TypeScript', desc: '정적 타입 기반 JavaScript' },
  { name: 'TailwindCSS', desc: '유틸리티 퍼스트 CSS 프레임워크' },
  { name: 'Spring Boot', desc: '자바 기반 백엔드 프레임워크' },
  { name: 'Java', desc: '객체지향 프로그래밍 언어' },
  { name: 'MyBatis', desc: 'SQL 매퍼 ORM 프레임워크' },
  { name: 'Oracle', desc: '대규모 트랜잭션 DBMS' },
  { name: 'MySQL', desc: '범용 오픈소스 DBMS' },
  { name: 'JSP/JSTL', desc: 'Java 기반 서버 사이드 템플릿' },
  { name: 'Gradle', desc: '빌드 자동화 도구' },
  { name: 'Maven', desc: '프로젝트 관리 및 빌드 도구' },
  { name: 'Vite', desc: '초고속 번들러' },
  { name: 'WebPack', desc: '범용 모듈화 번들러' },
  { name: 'GitHub', desc: 'CI/CD 플랫폼' },
]

export const PROJECTS = [
  {
    name: 'dongjinmns',
    period: '2025.11',
    description: 'vue 기반 지인 회사 홈페이지',
    highlights: [
      '지인 회사 홈페이지 개발',
      '메일 전송기능 개발'
    ],
    repo: 'https://github.com/xhaxha2/dongginMns',
    demo: 'https://dongjinmns.kro.kr/',
    stack: ['vue', 'vite', 'git hosting'],
    type: 'toy',
  },
  {
    name: 'luck777',
    period: '2024.11',
    description: 'react + Spring Boot 기반 운세확인사이트',
    highlights: [
      '랜덤 운세 확인 기능 개발',
      '운세 이미지 저장/관리자 문의메일 기능개발',
    ],
    repo: '#',
    demo: 'http://js94.kro.kr:7777/',
    stack: ['React', 'Spring Boot', 'TailwindCSS'],
    type: 'toy',
  },
  {
    name: 'js-company',
    period: '2023.11',
    description: 'Next.js + Spring Boot 기반 근태 관리 시스템',
    highlights: [
    '직원 연차·미팅·출장 관리 기능 개발',
    'FullCalendar 기반 실시간 공휴일 연동 및 일정 관리 기능 구현',
    ],
    repo: 'https://github.com/salcho94/vacation',
    demo: 'http://js94.kro.kr:4000/',
    stack: ['React', 'Spring Boot', 'Next.js','TailwindCSS','fullcalendar'],
    type: 'toy',
  },
  {
    name: 'salcho-main',
    period: '2024 - ing',
    description:
        'React + spring boot 기반의 종합 웹 애플리케이션',
    highlights: [
      'React + Spring Boot 기반의 신규 구조 설계 및 전반적인 시스템 개발',
      '실시간 크롤링을 활용한 개발공고·뉴스 페이지 구현',
      '게시판 CRUD 기능 및 데이터 관리 로직 구현',
      '운동 기록 관리 기능 개발',
      '‘다른 글자 찾기’ 게임 및 관리자 커스텀 화면 구축',
      'AI 외부 라이브러리(GPT) 연동 상담 페이지 구현',
      '실시간 채팅방 생성 및 채팅 기능 개발',
      '사용자 관리 및 페이지 접근 경로 관리 기능 설계',
    ],
    repo: 'https://github.com/salcho94/react-springboot',
    demo: 'http://js94.kro.kr:3000/signIn',
    stack: ['React', 'Spring Boot', 'TailwindCSS','recoil','socket.io'],
    type: 'toy',
  },
  {
    name: 'CJ CGV 차세대 시스템 (온모바일)',
    period: '2025.3 - 2025.11',
    description:
        'React 기반 차세대 프론트엔드(스토어/액티비티/씨네톡) 신규 개발 및 결함 개선',
    highlights: [
      'Next.js + TypeScript 기반 신규 구조 설계 및 UI 컴포넌트 개발',
      '상품 판매원장 적재 핵심 기능 구현',
      '이용약관/개인정보처리방침 동의 모듈 및 페이지별 권한 설정',
    ],
    repo: '#',
    demo: '#',
    stack: ['React', 'Next.js', 'TypeScript', 'Spring Boot', 'TailwindCSS'],
    type: 'company',
  },
  {
    name: 'KT알파 통합 재고관리시스템 (TAMS)',
    period: '2024.3 - 2024.8',
    description:
        'KT알파 물류 재고 관리 플랫폼 내 웹 관리자 기능개선 및 Oracle 기반 데이터 처리 로직 개발',
    highlights: [
      'Spring Boot + MyBatis 기반 데이터 매핑 최적화',
      'JSP UI 개선 및 RESTful API 연동 구조 리팩토링',
      '대시보드 조회 속도 개선 및 재고 로그 추적 기능 추가',
    ],
    repo: '#',
    demo: '#',
    stack: ['Spring Boot', 'MyBatis', 'Oracle', 'JSP'],
    type: 'company',
  },
  {
    name: '한살림 리뉴얼 고도화',
    period: '2024.8 - 2025.1',
    description:
        'Vue 구조에서 React로 전환하며 UI/UX 개선 및 관리자 기능 고도화 수행',
    highlights: [
      'React + TailwindCSS 컴포넌트 아키텍처 설계',
      'API 응답 데이터 매핑 및 Redux 상태관리 구조 개선',
      '관리자 상품 등록 및 검색 UI 최적화',
    ],
    repo: '#',
    demo: '#',
    stack: ['React', 'TailwindCSS', 'Spring Boot', 'Gradle', 'Oracle'],
    type: 'company',
  },
  {
    name: '현대해상 TMS 웹 관리자 시스템',
    period: '2023.1 - 2023.6',
    description:
        '보험사 관리자용 대시보드 화면 유지보수 및 신규 기능 연동 개발',
    highlights: [
      'Spring MVC + JSP 연동, REST API 기반 데이터 출력 개선',
      'Postman 기반 API 테스트 자동화 및 응답 구조 통일화',
      '프론트엔드 UI 리팩토링 및 오류 로깅 기능 추가',
    ],
    repo: '#',
    demo: '#',
    stack: ['Java', 'Spring MVC', 'MyBatis', 'Oracle'],
    type: 'company',
  },
  {
    name: '한솔 신기한 나라 프로젝트 (Live & 관리자)',
    period: '2022.2 - 2022.12',
    description:
        '유아 교육 콘텐츠 웹사이트 Live/관리자 플랫폼 개발. 신규 프론트 화면과 관리자 기능 통합 구축',
    highlights: [
      'Thymeleaf 기반 프론트엔드 페이지 개발 및 UI 개선',
      'Spring Boot + MyBatis 연동 및 DB CRUD 로직 구현',
      '사용자 페이지와 관리자 페이지 간 공통 모듈화 및 재사용 구조 정비',
    ],
    repo: '#',
    demo: '#',
    stack: ['Spring Boot', 'MyBatis', 'Thymeleaf', 'JavaScript', 'JQuery'],
    type: 'company',
  },
  {
    name: 'AltiCast (피플카)',
    period: '2022.4 - 2022.9',
    description:
        'VOC 대응 및 React 기반 프론트엔드 부분개발 진행. 고객 피드백에 따른 즉각적 UI 개선 및 유지보수 수행',
    highlights: [
      'React + TypeScript 기반 부분 컴포넌트 개발 및 API 연동',
      'Swagger / Axios 기반 HTTP 통신 로직 작성',
      'VOC 응대 및 프론트 기능 이슈 대응',
    ],
    repo: '#',
    demo: '#',
    stack: ['React', 'TypeScript', 'Axios', 'Swagger'],
    type: 'company',
  },
  {
    name: '국방부 사이트 프론트 리뉴얼',
    period: '2022.10 - 2022.12',
    description:
        '기존 공공기관 사이트의 JSP 구조 개선 및 전면적인 UI 리뉴얼 진행',
    highlights: [
      'JSP + JSTL 기반의 프론트 구조 리팩토링',
      'UI 단 컨텐츠 구성 및 접근성 개선',
      'JavaScript/JQuery 이벤트 구조 단순화 및 유지보수성 향상',
    ],
    repo: '#',
    demo: '#',
    stack: ['JSP', 'JSTL', 'JavaScript', 'JQuery'],
    type: 'company',
  },
  {
    name: '공정경쟁지원 / 콘텐츠분쟁조정 / 국립국어원',
    period: '2021.1 - 2021.12',
    description:
        '공공기관 웹 시스템 신규 구축 및 유지보수. JSP 기반 백엔드 및 DB 관리 기능 개발',
    highlights: [
      'Tibero, MySQL, Cubrid 등 다양한 DB 연동 경험',
      '기능개선 및 유지보수 중심의 행정 시스템 참여',
      'HTML/CSS 구조 개선 및 JSP 템플릿 관리 효율화',
    ],
    repo: '#',
    demo: '#',
    stack: ['Java', 'Spring Framework', 'MyBatis', 'JSP'],
    type: 'company',
  },
]


export const GROUPS = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 70 },
      { name: 'TypeScript', level: 70 },
      { name: 'TailwindCSS', level: 70 },
      { name: 'JSP / JSTL', level: 80 },
      { name: 'Vue', level: 60 },
      { name: 'Vanilla JS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'MyBatis', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Tibero / Cubrid', level: 60 },
    ],
  },
  {
    title: 'Infra & Tools & Other',
    items: [
      { name: 'Oracle / MySQL', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'Gradle / Maven', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'AI Tools (ChatGPT, Claude, Cursor 등)', level: 90 },
    ],
  },
]