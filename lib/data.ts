export const RESUME_DATA = {
  personal: {
    name: "Seryoung Kwak",
    role: "Front-End Developer",
    email: "dmckuromi@gmail.com",
    phone: "010-8641-1268",
    blog: "https://kuromi-dev.tistory.com/",
    github: "https://github.com/seryoungk",
    intro: `2023년 11월부터 프론트엔드 개발자로 일하고 있습니다.

첫 직장은 EA Korea였으며, FC온라인(피파)의 백오피스 웹사이트 FCOBOOK 개발에 참여하였습니다.
그 후 스타트업 아트라식스에 합류해, 미술품 관리 플랫폼 Art Spoon을 개발하였습니다.
현재는 네오다임에서 LG CNS 웹사이트 프론트엔드 개발을 담당하고 있습니다.

앞으로도 제가 가진 경험과 기술로써, 사용자에게 가치를 제공하는 유용한 서비스를 만들고자 합니다.`,
  },
  skills: [
    "Next.js",
    "React",
    "HTML",
    "TypeScript",
    "Javascript",
    "SCSS",
    "Tailwind",
  ],
  experience: [
    {
      company: "네오다임",
      role: "프론트엔드 개발자",
      period: "2025.08 ~ 재직 중",
      description:
        "Adobe, 현대자동차, TikTok, Amazon, hp, kt cloud, LG CNS, Microsoft 등 다국적 기업 대상 AEM 기반 웹사이트 개발 에이전시",
      link: "https://lgcns.com",
      linkText: "LG CNS 공식 웹사이트",
      tech: ["AEM(HTL)", "JavaScript", "SCSS"],
      projects: [
        {
          title: "LG CNS 공식 웹사이트 개발 (AEM 기반 프론트엔드)",
          details: [
            // 요금제
            "관리자가 요금 데이터를 직접 입력하면 사용자에게 요금제 가격과 결제 주기가 노출되도록 하는 요금제 컴포넌트를 기획하고 디자인했으며, 개발까지 단독으로 담당했습니다.",

            // Marketo / 문의 기능
            "Marketo 문의 페이지에서 연속 클릭으로 인한 중복 다운로드 이슈를 방지하기 위해 다운로드 버튼 비활성화 UI를 설계하고 직접 개발했습니다.",
            "Marketo 문의 페이지에서 파일 첨부 시 Drag & Drop 및 파일 선택 창을 통해 업로드가 가능하도록 UI를 기획하고 디자인했으며, 개발까지 진행했습니다.",
            "Marketo 문의 페이지에서 파일 업로드 진행 상태를 사용자에게 보여주는 UI와 첨부된 파일 리스트를 확인할 수 있는 UI를 함께 구현했습니다.",
            "Marketo 문의 페이지에서 기업을 검색했을 때의 UI를 디자인하고 개발했습니다.",
            "Marketo 문의 페이지에서 체크박스 선택 가능한 개수를 제한하는 기능을 구현했습니다.",
            "Marketo 문의 페이지에서 필드 UI를 개선했으며, 필드를 클릭했을 때 자동으로 해당 위치로 스크롤되도록 하는 기능을 개발했습니다.",

            // 메인 / 콘텐츠 / 컴포넌트
            "메인 화면에 노출되는 팝업 컴포넌트를 개발했으며, 디자인 수정 단계부터 참여하여 UI 구현까지 함께 진행했습니다.",
            "웹사이트 메인 화면에 노출되는 뉴스 타입 컴포넌트를 개발했습니다.",
            "인재 채용 공고 컴포넌트를 개선했습니다.",
            "챗봇을 화면에 호출하는 프론트엔드 UI를 개발했습니다.",
            "연관 콘텐츠(Series 자료)에 'Series' 태그를 노출하는 UI를 직접 디자인하고 개발했습니다.",

            // 구조 / 페이지 / 개선
            "메인 홈페이지 자료실에서 사용되는 모달 로직을 개선했습니다.",
            "사이트맵의 디자인을 개편하고 이를 개발까지 진행했습니다.",

            // AEM / 에디터
            "AEM 에디터에서 불릿이 정상적으로 렌더링되도록 CSS를 추가했습니다.",
            "사용자가 직접 특수기호를 입력하더라도 불릿으로 처리되도록 기능을 구현했습니다.",
          ],
        },
        {
          title: "LG CNS 공식 웹사이트 유지보수 (AEM)",
          details: [
            // AEM / 데이터
            "AEM 기반 데이터 처리를 위해 Java 모델을 개발하고 AEM 다이얼로그를 구성했습니다.",
            "HTML을 수정하는 방식으로 Authoring을 지원했습니다.",

            // UI/UX 개선
            "반응형 레이아웃을 최적화하고 네비게이션 구조를 개선했으며, 팝업 UI를 표준화했습니다.",

            // 기타 기능
            "Google Maps를 웹사이트에 임베딩하는 기능을 구현했습니다.",
          ],
        },
      ],
    },
    {
      company: "아트라식스",
      role: "프론트엔드 개발자",
      period: "2024.02 ~ 2025.07",
      description: "미술품 관리 웹 서비스 제공 스타트업",
      link: "https://www.artspoon.io",
      linkText: "아트스푼 웹사이트",
      tech: ["Next.js", "SCSS", "MUI"],
      projects: [
        {
          title: "기능 개발 및 사용자 경험 개선",
          details: [
            "다이나믹 링크 처리 및 권한 관리",
            "파일 다운로드 (PDF, Excel)",
            "로그인 없는 Demo 페이지 기획 및 구현",
            "Search 페이지 최적화 (SSR+CSR)",
            "폴더 및 챌린지 시스템 개발",
            "NextAuth 기반 이메일 로그인",
            "Swiper/ProgressBar UI 및 DnD 기능",
            "초대 코드 자동 생성 로직",
          ],
        },
        {
          title: "UI/UX 및 반응형 디자인",
          details: [
            "디자인 시스템 적용 및 공통 컴포넌트 개발",
            "GNB 반응형 UI 및 텍스트 줄바꿈 제어",
            "애니메이션 효과 및 MUI 활용",
            "로그인 입력 UX 개선 (useRef)",
          ],
        },
        {
          title: "데이터 처리 및 시각화",
          details: [
            "해외 미술 전시 크롤링 및 캘린더 시각화",
            "MUI DataGrid 커스터마이징",
            "구글 캘린더 연동 및 커스텀 캘린더 제작",
          ],
        },
        {
          title: "기타 성과",
          details: [
            "i18n 다국어 지원 (ko, en, zh, jp)",
            "Lighthouse 점수 향상 (퍼포먼스 45%→69%, 접근성 86%→92%)",
            "SSR 적용 및 이미지 최적화",
            "쿠키 동의 및 로컬 스토리지 활용",
            "숫자 입력 처리 및 시간 유틸 개발",
          ],
        },
      ],
    },
    {
      company: "Electronic Arts Korea",
      role: "프론트엔드 개발자",
      period: "2023.11 ~ 2024.02",
      description: "FC온라인4(FIFA) 백오피스 개발",
      tech: ["Vue", "React", "Vuetify"],
      projects: [
        {
          title: "백오피스 웹 페이지 개발 (Vue)",
          details: [
            "유효성 검사 강화 및 업무 단순화 (엑셀 -> API)",
            "Ace Editor 도입 및 API 검색 기능",
            "선물 정보 조회 및 더비 매치 정보 관리 기능",
          ],
        },
        {
          title: "데이터 백오피스 에러 해결 (React)",
          details: [
            "대용량 데이터 처리 및 에러 핸들링",
            "다국어(ko, zh, en) 지원 적용",
            "컴포넌트형 -> 함수형 리팩토링",
            "도메인 변경 작업 (FIFA -> FC ONLINE)",
          ],
        },
      ],
    },
  ],
  freelance: [
    {
      company: "HI-ME",
      role: "프론트엔드 개발자",
      period: "2025.09 ~ 2025.12",
      description: "헬스케어 관련 서비스",
      tech: ["React", "Typescript", "Tanstack"],
      details: [
        "모바일 웹 퍼블리싱 및 API 연동",
        "공통 컴포넌트 개발",
        "UI/UX 최적화",
      ],
    },
  ],
  education: [
    {
      institution: "가톨릭대학교",
      degree: "정보통신전자공학부 수료",
      period: "2016.03 ~ 2021.02",
    },
    {
      institution: "부트캠프 항해99",
      degree: "수료",
      period: "2023.01 ~ 2023.04",
    },
  ],
  certifications: [
    {
      testName: "AEM Business Practitioner Professional",
      time: "2025. 12. 16",
    },
    {
      testName: "TOEIC 840",
      time: "2023. 08. 06",
    },
    {
      testName: "OPIC IH",
      time: "2021. 12. 22",
    },
    {
      testName: "JPT 470",
      time: "2021. 05. 16",
    },
  ],
};
