export const RESUME_DATA = {
  personal: {
    name: "Seryoung Kwak",
    role: "Front-End Developer",
    email: "dmckuromi@gmail.com",
    phone: "010-8641-1268",
    blog: "https://kuromi-dev.tistory.com/",
    github: "https://github.com/seryoungk",
    intro: `1998년생이며, 2023년 11월부터 프론트엔드 개발자로 일하고 있습니다.

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
          title: "LG CNS 공식 웹사이트 개발",
          details: [
            "관리자가 요금 데이터를 직접 입력하면, 사용자에게 요금제 가격과 결제 주기를 노출하는 요금제 컴포넌트를 기획·디자인·개발까지 단독으로 담당",
            "메인 화면에 노출되는 팝업 컴포넌트를 개발하고, 디자인 수정 단계부터 참여하여 UI 구현",
            "챗봇을 화면에 호출하는 프론트엔드 UI 작업",
            "연관 콘텐츠(Series 자료)에 'Series' 태그를 노출하는 UI를 직접 디자인하고 개발",
            "Marketo 다운로드 기능에서 연속 클릭으로 인한 중복 다운로드 이슈를 방지하기 위해, 다운로드 버튼 비활성화 UI를 설계하고 직접 개발",
            "Marketo 문의 기능에서 파일 첨부 시 Drag & Drop 및 파일 창을 통한 업로드가 가능하도록 UI를 기획·디자인·개발하였으며",
            "파일 업로드 진행 상태 및 첨부 파일 리스트 UI까지 함께 구현",
          ],
        },
        {
          title: "LG CNS 공식 웹사이트 유지보수",
          details: [
            "AEM 기반 데이터 처리: Java 모델 개발 및 AEM 다이얼로그 구성",
            "UI/UX 개선: 반응형 레이아웃 최적화, 네비게이션 개선, 팝업 표준화",
            "HTML/Javascript: Google Maps 임베딩, HTML 수정을 통한 Authoring",
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
