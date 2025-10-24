export const MYSELECTSHOP_DETAIL = {
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
      items: [],
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
      items: [],
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
      title: "",
      thinking:
        "유저와 리뷰 데이터를 한 번에 가져오는 구조는 단순하지만, 리뷰가 많아질수록 데이터가 비대해져 성능 저하가 발생했습니다. 특히 이미지가 포함된 리뷰 데이터의 특성상 이 문제가 더욱 심각했습니다.",
      description:
        "이를 해결하기 위해 유저 데이터와 리뷰 데이터를 분리하여 관리하고, 무한스크롤 및 Lazy Loading 방식을 적용했습니다. 그 결과, 데이터 로딩 효율성과 사용자 경험을 모두 개선할 수 있었습니다.",
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
