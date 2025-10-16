const NOWAIT_DETAIL = {
  id: "noWait",
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
        "<strong>Zustand의 persist 미들웨어를 적용하여 상태 데이터와 LocalStorage의 데이터 동기화를 자동화</strong>함으로써, 데이터 불일치로 인한 오류를 크게 줄였습니다.",
    },
    {
      title: "장바구니 품절 처리 개선",
      thinking:
        "장바구니 데이터가 DB가 아닌 로컬 스토리지(LocalStorage) 에만 저장되어 있어, 사용자의 장바구니 메뉴가 실시간으로 품절 여부를 확인할 수 없는 문제가 있었습니다. 이로 인해 사용자는 이미 품절된 메뉴를 장바구니에 담고 주문까지 시도할 수 있는 불편함이 발생했습니다.",
      description:
        "결제 페이지로 넘어가기 전에서 품절 메뉴 검증 처리 코드를 추가하였습니다. <strong>품절 메뉴가 발견되면 모달 창으로 안내 메시지를 띄워 사용자 경험을 개선 하였고, 사용자가 품절된 메뉴를 모른 채 주문을 진행하는 문제를 최소화</strong> 했습니다.",
    },
    {
      title: "낙관적 업데이트를 통한 북마크 기능 사용자 경험 개선",
      thinking:
        "처음에는 React Query의 invalidateQueries를 사용하여 북마크 기능을 구현했지만, QA 테스트 과정에서 API 응답 이후에만 UI가 업데이트되어 사용자가 버튼을 눌렀을 때 즉각적인 반응이 없는 문제가 확인되었습니다. 이로 인해 사용자 경험이 저하될 우려가 있었습니다.",
      description:
        "ReactQuery의 setQueryData를 활용하여 사용자가 북마크 버튼을 클릭하면, API 응답을 기다리지 않고 즉시 UI에 반영하는 <strong>낙관적 업데이트를 구현하여 사용자 경험을 개선</strong>했습니다. 요청 실패 상황에서도 롤백을 통해 데이터가 꼬이지 않도록 처리했습니다.",
    },
    {
      title: "웨이팅 디테일 페이지 및 결제 페이지 구현",
      thinking:
        "웨이팅 등록 및 주문 시스템에서 가장 중요하게 고려한 부분은 중복 처리 방지였습니다. 특히 웨이팅 등록은 사용자가 빠르게 여러 번 클릭할 가능성이 높다고 판단했습니다.",
      description:
        "간단하게 state와 버튼의 disabled 속성을 활용해, 한 번 클릭 시 버튼이 비활성화되도록 구현하여 중복 요청 문제를 효과적으로 방지했습니다.",
    },
    {
      title: "카카오 지도 API를 활용한 대학교 축제 맵 구현",
      thinking:
        "대학교 주점 특성상 주점의 좌표를 정확한 위치를 특정하기 어려워 좌표를 일일이 확인하는 과정이 비효율적이었습니다.",
      description:
        "이를 해결하기 위해 주점 위치에 해당하는 마커를 자동으로 생성하고, 좌표를 복사할 수 있는 MapManage 페이지를 구현하여 마커 생성 과정을 효율화했습니다.",
    },
    {
      title: "뒤로가기 문제",
      thinking:
        "주문이 완료된 후 사용자가 브라우저 뒤로가기 버튼을 눌렀을 때, 이전 결제 페이지로 다시 이동하는 UX 문제가 발생했습니다. 이는 사용자의 혼동을 초래하고 잘못된 재결제 시도를 유발할 수 있는 잠재적 위험 요소였습니다. 또한 웹 환경에서는 브라우저에서 기본적으로 제공하는 뒤로가기 기능을 고려해야 하며, 단순히 페이지 이동만으로는 이러한 UX 문제를 해결할 수 없었습니다.",
      description:
        "이를 해결하기 위해 React Router의 useNavigate 훅과 replace 속성을 활용하여 히스토리 스택을 제어하였습니다. 이 접근 방식을 통해 사용자가 뒤로가기를 눌러도 의도된 설계 페이지로 안전하게 이동하도록 개선하였으며, 페이지 흐름을 안정화하고 사용자의 불필요한 혼동을 최소화했습니다.",
    },
    {
      title: "사용자가 기다림을 느끼지 않도록 UX 개선",
      thinking:
        "페이지 이동 시 사용자가 빈 화면을 보거나 버튼 클릭 후 즉시 반응하지 않는 경험은, 서비스 전반의 사용성에 큰 영향을 줄 수 있는 UX 문제였습니다. 이를 최소화하는 것을 목표로 삼고, 초기 렌더링과 API 응답 지연으로 인한 사용자 불편을 사전에 고려하여 설계를 진행했습니다.",
      description:
        "해결 방안으로 로딩 스피너와 스켈레톤 UI를 적극 활용하였습니다. 이를 통해 페이지 전환 및 데이터 로딩 과정에서 사용자에게 시각적 피드백을 제공하고, 빈 화면 노출과 무반응 상태를 최소화하여 초기 렌더링과 API 요청 과정에서의 사용자 경험을 크게 향상시켰습니다.",
    },
    {
      title: "Discord PR 알림 시스템 구축",
      thinking:
        "기존에는 PR시 Discord의 DM을 통해 PR 체크를 부탁 했어야 했고, 매번 요청을 보내는 것이 비효율적이라고 생각 했습니다. 매번 수동으로 요청을 보내야 했기 때문에 협업 효율이 떨어지고 반복 작업이 많았습니다.",
      description:
        "WebHook을 사용하여 팀원이 GitHub에 직접 접속하지 않아도 <strong>실시간으로 코드 리뷰 상황을 확인할 수 있도록 하여 협업 효율을 향상</strong>시켰습니다.",
    },
  ],
  troubleShooting: [
    {
      id: "noWait",
      title: "CORS 설정 미비로 인한 쿠키 미전송 문제",
      trouble: {
        title: "문제점",
        contents: [
          "POST /orders API(음식 주문 요청)를 보냈을 때, 서버에서는 201 Created 응답이 정상적으로 반환되고, 데이터베이스(DB)에도 주문 정보가 정상적으로 저장되는 것을 확인했습니다.",
          "하지만 이후 GET /orders API(구매 내역 조회 요청)를 보냈을 때는, 응답 코드가 200 OK로 정상임에도 불구하고 응답 데이터가 빈 배열([])로 반환되었습니다.",
          "반면 Swagger나 Postman 등 백엔드 테스트 도구로 같은 요청을 보냈을 때는 정상적으로 주문 내역이 조회되었습니다.",
        ],
      },
      cause: {
        title: "원인",
        contents: [
          "프론트엔드에서 API 요청을 보낼 때 쿠키를 명시적으로 포함하지 않아, 서버가 요청을 올바른 세션으로 인식하지 못했습니다.",
          "또한 SameSite 쿠키 정책으로 인해, 프론트엔드와 백엔드의 도메인이 다를 경우 브라우저가 자동으로 쿠키를 전송하지 않았습니다.",
          "이로 인해 요청 자체는 정상적으로 처리되었지만, 세션이 식별되지 않아 빈 데이터를 반환받는 문제가 발생했습니다.",
        ],
      },
      solution: {
        title: "해결방법",
        contents: [
          "Axios나 Fetch 요청 시 `withCredentials: true` 옵션을 추가하여 쿠키가 함께 전송되도록 설정했습니다.",
          "개발 환경에서는 프록시를 이용해 프론트엔드와 백엔드의 도메인과 포트를 통일시켜, SameSite 정책으로 인한 쿠키 전송 제한 문제를 해결했습니다.",
        ],
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
      title: "CORS 설정 미비로 인한 쿠키 미전송 문제",
      trouble: {
        title: "문제점",
        contents: [
          "POST /orders API(음식 주문 요청)를 보냈을 때, 서버에서는 201 Created 응답이 정상적으로 반환되고, 데이터베이스(DB)에도 주문 정보가 정상적으로 저장되는 것을 확인했습니다.",
          "하지만 이후 GET /orders API(구매 내역 조회 요청)를 보냈을 때는, 응답 코드가 200 OK로 정상임에도 불구하고 응답 데이터가 빈 배열([])로 반환되었습니다.",
          "반면 Swagger나 Postman 등 백엔드 테스트 도구로 같은 요청을 보냈을 때는 정상적으로 주문 내역이 조회되었습니다.",
        ],
      },
      cause: {
        title: "원인",
        contents: [
          "프론트엔드에서 API 요청을 보낼 때 쿠키를 명시적으로 포함하지 않아, 서버가 요청을 올바른 세션으로 인식하지 못했습니다.",
          "또한 SameSite 쿠키 정책으로 인해, 프론트엔드와 백엔드의 도메인이 다를 경우 브라우저가 자동으로 쿠키를 전송하지 않았습니다.",
          "이로 인해 요청 자체는 정상적으로 처리되었지만, 세션이 식별되지 않아 빈 데이터를 반환받는 문제가 발생했습니다.",
        ],
      },
      solution: {
        title: "해결방법",
        contents: [
          "Axios나 Fetch 요청 시 `withCredentials: true` 옵션을 추가하여 쿠키가 함께 전송되도록 설정했습니다.",
          "개발 환경에서는 프록시를 이용해 프론트엔드와 백엔드의 도메인과 포트를 통일시켜, SameSite 정책으로 인한 쿠키 전송 제한 문제를 해결했습니다.",
        ],
      },
    },
  ],
};

export const PROJECTS = [
  {
    id: "noWait",
    title: "노웨잇",
    description: "학교 축제 원격 웨이팅 및 테이블 오더 서비스",
    subDescription:
      "노웨잇 서비스는 대학교 축제에서 불필요한 주점 웨이팅, 수기로 작성되는 주문 시스템을 개선하기 위해 만들어졌습니다. 관리자와 사용자 모두 고려한 기획과 설계가 이루어졌으며, 1명의 디자이너와 프론트엔드 3명, 백엔드 2명이 팀을 이루어 기획 및 디자인, 개발을 진행 하였고, 주 2회 오프라인 회의와 Discord, Figma, Swagger를 통해 원활한 소통과 협업을 진행했습니다.",
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
