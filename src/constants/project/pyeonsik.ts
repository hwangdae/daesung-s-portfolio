export const PYEONSIK_DETAIL = {
  id: "pyeonsik",
  features: [
    {
      title: "편의점 상품을 사진에 태그 하는 '편식 조합' 기능",
      items: ["업로드 이미지 클릭 시 편의점 상품 태그 가능"],
    },
    {
      title: "게시글 댓글, 좋아요, 저장, 공유, 인용 가능",
      items: [],
    },
    {
      title: "카드 스와이프를 통한 편의점 신상품 리뷰 가능",
      items: ["마우스로 카드 스와이프를 통한 좋아요, 싫어요 리뷰 가능"],
    },
    {
      title: "편의점별 가까운 지점 안내 가능",
      items: ["현재 위치를 기준으로 가장 가까운 지점 안내 가능"],
    },
    {
      title: "활동에 따른 배지 지급 및 레벨 업 기능",
      items: ["숨겨진 행동을 통한 배지 및 레벨 업 기능"],
    },
    {
      title: "고객센터 기능",
      items: ["사용자의 불편함 및 유저신고를 처리 가능"],
    },
    {
      title: "다양한 편의점 행사 할인 품목 및 게시글 검색 가능",
      items: [],
    },
  ],
  techStacks: [
    { title: "React", description: "" },
    { title: "TypeScript", description: "" },
    { title: "Jotai", description: "" },
    { title: "KakaoMapAPI", description: "" },
    { title: "React-Hook-Form", description: "" },
    { title: "Supabase", description: "" },
    { title: "styled-Components", description: "" },
  ],
  works: [
    {
      title: "게시물에 대한 댓글 및 대댓글 CRUD, 좋아요 기능 구현",
      thinking: [
        "댓글과 대댓글의 CRUD 로직이 유사함에도 불구하고 각각 별도의 코드로 작성되어, 중복된 코드가 많아지고 유지보수가 어려운 구조였습니다.",
      ],
      description: [
        "댓글과 대댓글의 공통 로직을 분리하고, type props를 통해 기능을 구분하도록 설계한 <strong>재사용 가능한 컴포넌트로 리팩토링하여 중복 코드를 최소화하고 유지보수성을 높였습니다.</strong>",
      ],
    },
    {
      title: "고객센터 단계별 폼 및 작성 기능 구현",
      thinking: [
        "총 4단계로 구성된 고객센터 프로세스에서, 마지막 단계에서만 작성 API를 호출하는 구조였습니다. 각 단계로 데이터를 전달하기 위해 props가 점점 많아지면서 심각한 props drilling이 발생했고, 컴포넌트 간 결합도가 높아 유지보수가 어려워졌습니다.",
      ],
      description: [
        "<strong>전역 상태 관리 라이브러리인 Jotai를 도입해 props drilling을 제거</strong>하고, 각 단계 컴포넌트가 전역 상태를 직접 구독하도록 구조를 개선했습니다. 이를 통해 <strong>컴포넌트 간 결합도를 낮추고, 단계 간 데이터 흐름을 단순화하여 유지보수성과 가독성을 높였습니다.</strong>",
      ],
    },
    {
      title: "카드 스와이프를 통한 편의점 신상품 리뷰 기능 구현",
      thinking: [
        "마우스로 카드를 스와이프하며 리뷰를 남기는 기능을 구현할 때, 사용자가 자연스럽고 몰입감 있게 느낄 수 있는 모션과 조작감을 가장 중요하게 생각했습니다. 단순한 애니메이션이 아니라 실제 물리적인 카드 이동처럼 보이도록 구현하기 위해 react-card-rotate-swiper 라이브러리를 도입했습니다.",
      ],
      description: [
        "<strong>스와이프 제스처와 회전 모션을 결합해 자연스러운 카드 이동감을 구현하여, 사용자 경험을 개선</strong>했습니다. 이를 통해 신상품 리뷰 작성 과정이 단조롭지 않게 느껴지도록 만들어 <strong>사용자의 인터랙션 몰입도와 서비스 완성도를 높였습니다.</strong>",
      ],
    },
  ],
  troubleShooting: [
    {
      id: "1",
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
