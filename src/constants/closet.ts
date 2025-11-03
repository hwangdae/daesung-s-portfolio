export const CLOSET_DETAIL = {
  id: "closet",
  features: [
    {
      title: "토스페이먼츠 결제 위젯 연동",
      items: [],
    },
    {
      title: "쿠폰 기능",
      items: ["사용자가 쿠폰을 선택하고 할인을 받을 수 있는 기능"],
    },
    {
      title: "포인트 기능",
      items: ["사용자가 보유한 포인트를 사용하여 결제 가능"],
    },
    {
      title: "UI 구성",
      items: ["Shadcn UI를 활용한 통일된 폼, 버튼 스타일링"],
    },
  ],
  techStacks: [
    { title: "NextJs", description: "" },
    { title: "React", description: "" },
    { title: "TypeScript", description: "" },
    { title: "Recoil", description: "" },
    { title: "React-Hook-Form + Zod", description: "" },
  ],
  works: [
    {
      title: "목업 데이터를 통한 상품 및 쿠폰 기능 구현",
      thinking:
        "LocalStorage를 사용하면서 상태가 변경될 때마다 데이터 동기화 코드를 작성해야 하고, JSON 직렬화와 파싱까지 수동으로 처리해야 하는 비효율적인 코드가 발생했습니다.",
      description:
        "Zustand의 persist 미들웨어를 적용하여 상태와 LocalStorage 간 동기화를 자동화함으로써, 데이터 불일치로 인한 오류를 크게 줄였습니다.",
    },
    {
      title: "폼 검증 자동화",
      thinking:
        "결제 과정에서 상품 정보, 쿠폰, 포인트 등 다양한 입력 필드가 존재해 수동으로 검증과 에러 메시지를 관리하기 어렵고, 로직 중복이 많았습니다.",
      description:
        "React-hook-form과 Zod를 결합해 폼 검증을 스키마 기반으로 자동화하여, 입력 오류를 예방하고 코드 일관성과 재사용성을 높였습니다.",
    },
    {
      title: "토스페이먼츠 결제 연동",
      thinking:
        "결제 요청 시 중복 클릭이나 비정상 응답이 발생할 경우, 사용자가 혼란스러워지는 문제를 사전에 방지할 필요가 있었습니다.",
      description:
        "Toss Payments API를 연동하고 결제 상태를 비동기적으로 제어하는 로직을 구현하여, 안정적인 결제 흐름을 제공했습니다.",
    },
    {
      title: "포인트 및 쿠폰 할인 로직 구현",
      thinking:
        "비회원 결제 구조에서 서버 없이 쿠폰과 포인트를 어떻게 관리할지 고민했습니다. 단순한 금액 차감이 아닌, 여러 할인 조건을 결합해야 했습니다.",
      description:
        "목업 데이터를 활용해 쿠폰(정액/정율)과 포인트를 함께 계산할 수 있는 할인 로직을 구현하고, 최종 결제 금액이 실시간으로 반영되도록 설계했습니다.",
    },
    {
      title: "장바구니 기능 (프론트 단 상태 기반)",
      thinking:
        "데이터베이스 없이 상품 사이즈 선택, 수량 조절, 중복 추가 방지 등 복잡한 장바구니 로직을 프론트엔드 단에서 어떻게 처리할지 고민했습니다. 또한, 사용자가 실제 쇼핑몰을 이용하는 듯한 자연스러운 흐름을 구현하는 데 집중했습니다.",
      description:
        "useState를 활용해 장바구니 상태를 구성하고, 사이즈별 중복 추가 방지 및 수량 조절 로직을 구현했습니다. 이를 통해 사용자 입장에서 직관적이고 부드러운 구매 경험을 제공했습니다.",
    },
  ],
  troubleShooting: [
    {
      id: "closet",
      title: "Next.js 라우터 파라미터 미정의로 인한 새로고침 시 렌더링 오류",
      trouble: {
        title: "문제점",
        contents: [
          "상품 상세 페이지(`/detail/[id]`)에서 `router.query.id`를 사용해 mock 데이터(`MERCHANDISES`) 중 해당 상품을 찾아 표시했습니다.",
          "일반적인 페이지 이동 시에는 잘 동작했지만, 새로고침시 상품 데이터가 undefined가 나오면서 오류가 발생했습니다.",
        ],
      },
      cause: {
        title: "원인",
        contents: [
          '문제는 새로고침 시 서버에서 먼저 렌더링이 일어나는데, 이 시점에는 `router.query.id`가 아직 정의되지 않아 "undefined" 상태였습니다.',
          '결국 `MERCHANDISES.find(...)` 결과가 "undefined"가 되었고, 그 상태에서 상품 데이터를 참조하면서 오류가 발생했습니다.',
        ],
      },
      solution: {
        title: "해결방법",
        contents: [
          '이 문제를 해결하기 위해 "getServerSideProps" 를 사용해 서버에서 "id" 값을 직접 받아오도록 수정했습니다.',
          "SSR 방식에서는 서버가 페이지를 렌더링하기 전에 필요한 데이터를 미리 불러오기 때문에, 클라이언트는 이미 완성된 `merchandise` 데이터를 전달받아 안전하게 렌더링할 수 있습니다.",
        ],
      },
    },
  ],
};
