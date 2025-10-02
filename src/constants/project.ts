export const PROJECTS = [
  {
    title: "노웨잇",
    description: "학교 축제 원격 웨이팅 및 테이블 오더 서비스",
    tags: ["팀", "사이드"],
    features: [
      {
        title: "주점 웨이팅 기능",
        items: [
          "실시간 웨이팅 등록 및 순번 확인 가능",
          "대기 인원 현황과 예상 대기 시간을 사용자에게 제공",
          "호출 알림 기능으로 입장 시 편리한 안내 가능",
        ],
      },
      {
        title: "축제 맵 한눈에 보기",
        items: [
          "축제 현장의 부스(주점·이벤트 공간 등)를 지도 기반으로 시각화",
          "각 부스별 정보(메뉴, 운영 시간, 혼잡도 등) 확인 가능",
        ],
      },
      {
        title: "QR코드 기반 주점 메뉴 주문 기능",
        items: [
          "QR 코드 스캔을 통한 간편 주문 가능",
          "주문 내역을 통한 주문 현황 제공",
        ],
      },
      {
        title: "계좌이체 기반 결제 시스템",
        items: [
          "계좌이체를 통한 직접 결제 지원",
          "카카오 페이, 네이버 페이, 토스 페이 결제 지원",
        ],
      },
    ],
    techStack: [
      { title: "React", description: "" },
      { title: "TypeScript", description: "" },
      { title: "Axios", description: "" },
      { title: "Zustand", description: "" },
      { title: "KakaoMapAPI", description: "" },
    ],
    work: [
      {
        title: "LocalStorage 기반 장바구니 구현",
        thinking:
          "앱에서 Zustand를 사용하여 상태 관리를 하고 있었는데, 사용자의 상태를 브라우저 새로고침 후에도 유지하기 위해 localStorage와 연동해야 했습니다. 처음에는 localStorage를 직접 사용하여 상태를 저장하고 불러오는 방식을 고려했지만, 상태 변화마다 동기화 코드를 작성해야 하고 JSON 직렬화/파싱까지 수동으로 처리해야 하는 문제가 있었습니다.",
        description: [
          "Zustand의 persist 미들웨어를 도입하여 상태와 localStorage 간의 동기화를 자동화했습니다. 이를 통해 상태가 변경될 때마다 localStorage에 자동 저장되고, 새로고침 시에도 즉시 복원되도록 구현했습니다. JSON 처리와 저장/불러오기 로직도 내부에서 처리되므로 코드가 훨씬 간결해졌습니다.",
        ],
      },
      {
        title: "Discord PR 알림 시스템 구축",
        description: [
          "팀원이 GitHub에 직접 접속하지 않아도 실시간으로 코드 리뷰 상황을 확인할 수 있도록 하여 협업 효율을 향상시켰습니다.",
        ],
      },
    ],
    troubleShooting: [
      {
        title: "CORS의 쿠키",
        trouble: {
          title: "문제",
          content: [
            "POST /orders (음식 주문 요청) 시 201 Created 응답, DB에도 정상 저장됨.",
            "GET /orders (구매 내역 조회 요청) 시 200 OK 응답이지만, 응답 데이터가 빈 배열로 옴.",
            "Swagger, Postman에서는 문제없이 주문 내역 확인 가능.",
          ],
        },
        Cause: {
          title: "원인",
          content: [
            "프론트엔드에서 API 요청 시 쿠키를 명시적으로 포함하지 않아, 세션이 식별되지 않고 빈 데이터가 반환.",
            "Same Site 정책에 의해 쿠키 전송이 제한 됨.",
            "위의 이유로 api 요청에는 이상이 없었지만 쿠키 교환이 제대로 이뤄지지 않아서 빈 데이터를 반환 받음.",
          ],
        },
        solution: {
          title: "해결방법",
          content: ["쿠키를 포함하는 모든 요청에 withCredentials 포함하기"],
        },
      },
    ],
  },
  {
    title: "마이 셀렉트샵",
    description: "내 주변의 쇼핑몰을 탐색하고 리뷰를 남길 수 있는 서비스",
    tags: ["개인", "사이드"],
  },
  {
    title: "편식",
    description: "편의점 음식 조합을 공유하는 커뮤니티 서비스",
    tags: ["팀", "사이드"],
  },
  {
    title: "포트폴리오 사이트",
    description: "나를 나타내는 공간",
    tags: ["개인", "사이드", "포트폴리오"],
  },
  {
    title: "클로젯",
    description: "간단한 의류 쇼핑몰 사이트",
    tags: ["개인", "사이드"],
  },
];
