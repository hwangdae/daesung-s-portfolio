const NOWAIT_DETAIL = {
  id: "noWait",
  description : "대학교 축제에서 주점 웨이팅 및 테이블 오더 서비스를 제공하기 위해 만들어진 서비스 입니다. 관리자 운영과 사용자 사용까지 기획 및 설계 된 웹 서비스입니다. 디자이너 1명과 프론트엔드 3명, 백엔드 2명으로 이루어져 있고, 주 2회 오프라인 회의, Discord,Figma,Swagger를 통해 효율적이고 원활한 커뮤니케이션을 위해 노력했습니다.",
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
  techStacks: [
    { title: "React", description: "" },
    { title: "TypeScript", description: "" },
    { title: "Axios", description: "" },
    { title: "Zustand", description: "" },
    { title: "KakaoMapAPI", description: "" },
    { title: "Tailwind", description: "" },
  ],
  works: [
    {
      title: "LocalStorage 기반 장바구니 구현",
      thinking:
        "LocalStorage를 사용하면서 상태가 변경될 때마다 데이터 동기화 코드를 작성해야 하고, JSON 직렬화와 파싱까지 수동으로 처리해야 하는 비효율적인 코드가 발생했습니다.",
      description:
        "Zustand의 persist 미들웨어를 적용하여 상태 데이터와 LocalStorage의 데이터 동기화를 자동화함으로써, 데이터 불일치로 인한 오류를 크게 줄였습니다.",
    },
    {
      title: "장바구니 품절 처리 개선",
      thinking:
        "장바구니 데이터가 DB가 아닌 로컬 스토리지(LocalStorage) 에만 저장되어 있어, 사용자의 장바구니 메뉴가 실시간으로 품절 여부를 확인할 수 없는 문제가 있었습니다. 이로 인해 사용자는 이미 품절된 메뉴를 장바구니에 담고 주문까지 시도할 수 있는 불편함이 발생했습니다.",
      description:
        "결제 페이지로 넘어가기 전에서 품절 메뉴 검증 처리 코드를 추가하였습니다. 품절 메뉴가 발견되면 모달 창으로 안내 메시지를 띄워 사용자 경험을 개선 하였고, 사용자가 품절된 메뉴를 모른 채 주문을 진행하는 문제를 최소화 했습니다.",
    },
    {
      title: "낙관적 업데이트를 통한 북마크 기능 사용자 경험 개선",
      thinking:
        "처음에는 React Query의 invalidateQueries를 사용하여 북마크 기능을 구현했지만, QA 테스트 과정에서 API 응답 이후에만 UI가 업데이트되어 사용자가 버튼을 눌렀을 때 즉각적인 반응이 없는 문제가 확인되었습니다. 이로 인해 사용자 경험이 저하될 우려가 있었습니다.",
      description:
        "ReactQuery의 setQueryData를 활용하여 사용자가 북마크 버튼을 클릭하면, API 응답을 기다리지 않고 즉시 UI에 반영하는 낙관적 업데이트를 구현하여 사용자 경험을 개선했습니다. 요청 실패 상황에서도 롤백을 통해 데이터 정합성을 보장 했습니다.",
    },
    {
      title: "Discord PR 알림 시스템 구축",
      thinking:
        "기존에는 PR시 Discord의 DM을 통해 PR 체크를 부탁 했어야 했고, 매번 요청을 보내는 것이 비효율적이라고 생각 했습니다. 매번 수동으로 요청을 보내야 했기 때문에 협업 효율이 떨어지고 반복 작업이 많았습니다.",
      description:
        "WebHook을 사용하여 팀원이 GitHub에 직접 접속하지 않아도 실시간으로 코드 리뷰 상황을 확인할 수 있도록 하여 협업 효율을 향상시켰습니다.",
    },
  ],
  troubleShooting: [
    {
      id: "noWait",
      trouble: {
        title: "문제",
        content: [
          "POST /orders (음식 주문 요청) 시 201 Created 응답, DB에도 정상 저장됨.",
          "GET /orders (구매 내역 조회 요청) 시 200 OK 응답이지만, 응답 데이터가 빈 배열로 옴.",
          "Swagger, Postman에서는 문제없이 주문 내역 확인 가능.",
        ],
      },
      cause: {
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
};

const MYSELECTSHOP_DETAIL = {
  id: "mySelectshop",
  features: [
    {
      title: "사용자 인증 및 정보 수정",
      items: [
        "NextAuth, prisma를 활용한 로그인 및 회원가입 가능",
        "사용자 정보 수정 가능",
      ],
    },
    {
      title: "현재 위치 기반 매장 탐색 기능",
      items: ["현재 위치를 기준으로 근처의 쇼핑몰 목록을 확인"],
    },
    {
      title: "매장에 대한 리뷰 작성 기능",
      items: [
        "QR 코드 스캔을 통한 간편 주문 가능",
        "주문 내역을 통한 주문 현황 제공",
      ],
    },
    {
      title: "유저 팔로우, 팔로워 기능",
      items: [
        "관심 있는 유저를 팔로우 가능",
        "팔로우 및 팔로워 리스트 확인 가능",
      ],
    },
    {
      title: "유저 채팅 기능",
      items: ["유저 간 1:1 채팅 가능"],
    },
    {
      title: "지역 베스트 리뷰어 기능",
      items: ["현재 위치를 기준으로 리뷰를 많이 남긴 사용자 TOP10을 확인 가능"],
    },
  ],
  techStacks: [
    { title: "NextJs", description: "" },
    { title: "React", description: "" },
    { title: "TypeScript", description: "" },
    { title: "Zustand", description: "" },
    { title: "KakaoMapAPI", description: "" },
    { title: "React-Hook-Form", description: "" },
    { title: "NextAuth", description: "" },
    { title: "PostgreSQL", description: "" },
    { title: "Prisma", description: "" },

    { title: "styled-Components", description: "" },
  ],
  works: [
    {
      title: "LocalStorage 기반 장바구니 구현",
      thinking:
        "LocalStorage를 사용하면서 상태가 변경될 때마다 데이터 동기화 코드를 작성해야 하고, JSON 직렬화와 파싱까지 수동으로 처리해야 하는 비효율적인 코드가 발생했습니다.",
      description:
        "Zustand의 persist 미들웨어를 적용하여 상태와 LocalStorage 간 동기화를 자동화함으로써, 데이터 불일치로 인한 오류를 크게 줄였습니다.",
    },
    {
      title: "장바구니 품절 처리 개선",
      thinking:
        "장바구니 데이터가 DB가 아닌 로컬 스토리지(LocalStorage) 에만 저장되어 있어, 사용자의 장바구니 메뉴가 실시간으로 품절 여부를 확인할 수 없는 문제가 있었습니다. 이로 인해 사용자는 이미 품절된 메뉴를 장바구니에 담고 주문까지 시도할 수 있는 불편함이 발생했습니다.",
      description:
        "결제 페이지로 넘어가기 전에서 품절 메뉴 검증 처리 코드를 추가하였습니다. 품절 메뉴가 발견되면 모달 창으로 안내 메시지를 띄워 사용자 경험을 개선 하였고, 사용자가 품절된 메뉴를 모른 채 주문을 진행하는 문제를 최소화 했습니다.",
    },
    {
      title: "낙관적 업데이트를 통한 북마크 기능 사용자 경험 개선",
      thinking:
        "북마크 기능을 구현하면서 API 응답을 기다린 후 UI를 갱신하면, 사용자가 북마크 버튼을 눌렀을 때 즉각적인 반응이 없어 지연된 느낌을 주는 문제가 있었습니다. 이로 인해 사용자 경험(UX)이 저하될 우려가 있었습니다.",
      description:
        "ReactQuery setQueryData를 활용하여 사용자가 북마크 버튼을 클릭하면, API 응답을 기다리지 않고 즉시 UI에 반영하는 낙관적 업데이트를 구현하여 사용자 경험을 개선했습니다. 요청 실패 상황에서도 롤백을 통해 데이터 정합성을 보장 했습니다.",
    },
    {
      title: "Discord PR 알림 시스템 구축",
      thinking:
        "기존에는 PR시 Discord의 DM을 통해 PR 체크를 부탁 했어야 했고, 매번 요청을 보내는 것이 비효율적이라고 생각 했습니다. 매번 수동으로 요청을 보내야 했기 때문에 협업 효율이 떨어지고 반복 작업이 많았습니다.",
      description:
        "WebHook을 사용하여 팀원이 GitHub에 직접 접속하지 않아도 실시간으로 코드 리뷰 상황을 확인할 수 있도록 하여 협업 효율을 향상시켰습니다.",
    },
  ],
  troubleShooting: [
    {
      id: "mySelectshop",
      trouble: {
        title: "문제",
        content: [
          "POST /orders (음식 주문 요청) 시 201 Created 응답, DB에도 정상 저장됨.",
          "GET /orders (구매 내역 조회 요청) 시 200 OK 응답이지만, 응답 데이터가 빈 배열로 옴.",
          "Swagger, Postman에서는 문제없이 주문 내역 확인 가능.",
        ],
      },
      cause: {
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
};

export const PROJECTS = [
  {
    id: "noWait",
    title: "노웨잇",
    description: "학교 축제 원격 웨이팅 및 테이블 오더 서비스",
    tags: ["팀", "사이드"],
    detail: NOWAIT_DETAIL,
  },
  {
    id: "mySelectshop",
    title: "마이 셀렉트샵",
    description: "내 주변의 쇼핑몰을 탐색하고 리뷰를 남길 수 있는 서비스",
    tags: ["개인", "사이드"],
    detail: MYSELECTSHOP_DETAIL,
  },
  {
    id: "pyeonsik",
    title: "편식",
    description: "편의점 음식 조합을 공유하는 커뮤니티 서비스",
    tags: ["팀", "사이드"],
  },
  {
    id: "daesungPortfolio",
    title: "포트폴리오 사이트",
    description: "나를 나타내는 공간",
    tags: ["개인", "사이드", "포트폴리오"],
  },
  {
    id: "closet",
    title: "클로젯",
    description: "간단한 의류 쇼핑몰 사이트",
    tags: ["개인", "사이드"],
  },
];
