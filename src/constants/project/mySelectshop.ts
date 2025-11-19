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
      title: "지역 베스트 리뷰어 TOP10 기능 구현 및 렌더링 최적화",
      thinking:
        ["개발 초기에는 코드 복잡도를 줄이기 위해 유저 데이터 안에 리뷰 데이터를 함께 포함하는 구조를 사용했습니다. 하지만 리뷰 수가 늘어남에 따라 데이터가 많아지면서 렌더링 지연이 발생했고, 특히 리뷰 데이터에 이미지가 포함되어 있어 렌더링 비용이 급격히 증가했습니다."],
      description:
        ["이를 해결하기 위해 유저 데이터와 리뷰 데이터를 분리하여 관리하고, 무한스크롤 및 windowing 기법을 사용하여 초기 데이터 양을 줄이고, DOM을 최적화 함으로써 렌더링 비용을 절감 했습니다. 그 결과, 데이터 로딩 효율성과 사용자 경험을 모두 개선할 수 있었습니다."],
    },
    {
      title: "이미지 최적화를 통한 성능 개선",
      thinking:
        ["리뷰 플랫폼 특성상 사용자가 직접 이미지를 업로드할 수 있었기 때문에, 고해상도 이미지 업로드 시 페이지 로딩 지연 및 전체 웹 성능 저하가 발생할 우려가 있었습니다."],
      description:
        ["이를 해결하기 위해 업로드 시점에서 이미지를 browser-image-compression 라이브러리를 사용해 사전 압축하고, WebP 포맷으로 자동 변환되도록 구현했습니다. 그 결과, 이미지 평균 용량을 약 73% 절감하면서도 품질 저하 없이 웹페이지 로딩 속도와 Lighthouse SEO 점수를 모두 개선할 수 있었습니다."],
      blog: "https://devdaybook.tistory.com/28",
    },
    {
      title:
        "폰트 최적화를 통한 TBT(Total Blocking Time) 개선",
       thinking:
    ["여러 개의 로컬 폰트를 개별적으로 로드하는 구조로 되어 있었기 때문에, 폰트 파일 수가 많아지고 용량이 커지면서 초기 로딩 속도 저하와 TBT(Total Blocking Time) 증가 문제가 발생했습니다. 또한 폰트 로딩 지연으로 인해 텍스트 깜빡임(FOIT) 현상이 발생하며 사용자 경험에도 악영향을 주었습니다."],
  description:
    ["이를 해결하기 위해 여러 개의 폰트 파일을 하나의 가변 폰트(Variable Font)로 통합하고, 사용하지 않는 문자 집합을 제거하는 서브세팅(Subsetting)을 적용하고, 주요 폰트를 `preload`로 미리 불러와 렌더링 지연을 줄였습니다. 이를 통해 폰트 파일 크기를 약 50% 줄이고, Lighthouse Performance 점수를 54점에서 84점으로 향상시켰으며, 폰트 로딩 지연과 TBT를 모두 개선할 수 있었습니다."],
      blog: "https://devdaybook.tistory.com/2",
    },
    {
      title: "GitHub Actions 기반 CI/CD 파이프라인 구축",
      thinking:
        ["기존에는 개발서버의 변경사항을 배포서버에 적용하기 위해 수동으로 진행했지만, 반복적인 빌드, 업로드 과정이 번거롭고 비효율적이라고 생각 했습니다."],
      description:
        ["이를 해결하기 위해 GitHub Actions를 이용한 CI/CD 파이프라인을 구축했습니다. main 브랜치에 코드가 올라올 경우 자동으로 빌드부터 서비스 재시작이 수행되도록 설정했습니다. 이를 통해 배포 시간을 5분에서 2분까지 단축할 수 있었습니다."],
      blog: "https://devdaybook.tistory.com/category/%EB%B0%B0%ED%8F%AC/AWS",
    },
  ],
  troubleShooting: [
    {
      id: "1",
      title: "useQuery 데이터와 useEffect 실행 시점 문제",
      trouble: {
        title: "문제점",
        contents: [
          "useQuery로 비동기 데이터를 가져오는 과정에서, 데이터가 도착하기 전에 useEffect가 먼저 실행되어 undefined 참조나 의도치 않은 동작이 발생했습니다.",
        ],
      },
      cause: {
        title: "원인",
        contents: [
          "React에서 useQuery는 비동기 함수로 데이터를 fetch함.",
          "useQuery가 호출되는 시점은 useEffect보다 먼저 이지만, 실제 데이터 fetch는 비동기이기 때문에 데이터가 도착하기 전까지는 빈 값 또는 초기값을 갖는다.",
          "그 결과, 데이터를 fetch하는 동안 useEffect가 먼저 실행되어 데이터가 아직 없는 상태일 수 있음.",
          "따라서, useEffect 내부에서 data를 바로 사용하면 undefined 참조 오류나 의도치 않은 동작이 발생할 수 있음.",
          "useQuery는 호출 시점은 빠르지만, 실제 데이터 fetch는 비동기로 처리되므로 useEffect 실행 시점에는 아직 데이터가 존재하지 않을 수 있습니다. 이로 인해 데이터 의존 로직이 빈 값 상태에서 실행되었습니다.",
        ],
      },
      solution: {
        title: "해결방법",
        contents: [
          "useEffect 내부에서 데이터 유효성을 검사하는 조건문을 추가해 조기 return하도록 했고, 의존성 배열에 data를 포함시켜 데이터가 도착했을 때만 로직이 실행되도록 수정했습니다.",
        ],
      },
    },
    {
      id: "2",
      title: "카카오 지도 API 페이지네이션 필터링 문제",
      trouble: {
        title: "문제점",
        contents: [
          "카카오 지도 API는 15개씩 고정된 페이지 단위로 데이터를 제공합니다. 하지만 클라이언트에서 ‘후기 미작성 매장’을 필터링할 경우, 각 페이지의 항목 수가 줄어들게 됩니다. 이때 줄어든 만큼을 다음 페이지에서 보충하지 않기 때문에 전체 데이터 수가 줄어든 것처럼 보이는 문제가 발생했습니다. 예를 들어, 예상 데이터 분포가 15 / 15 / 14개여야 하지만 실제로는 14 / 15 / 15개로 나타나 페이지에 빈칸이 생기거나 빈 페이지가 생기는 현상이 발생했습니다.",
        ],
      },
      cause: {
        title: "원인",
        contents: [
          "카카오 API는 서버에서 페이지 단위로 필터링 없이 데이터를 반환하기 때문에, 클라이언트에서 직접 필터링을 수행할 경우 페이지 경계가 유지되지 않습니다. 즉, 페이지 간 데이터 재분배가 일어나지 않아 정상적인 페이지 구성으로 보이지 않는 문제가 있었습니다.",
        ],
      },
      solution: {
        title: "해결방법",
        contents: [
          "모든 데이터를 먼저 가져온 뒤, 클라이언트에서 필터링과 재페이지네이션을 직접 처리하도록 수정했습니다. 이를 통해 사용자가 보기에는 정상적인 페이지 구성이 유지되도록 개선했습니다.",
        ],
      },
    },
  ],
};
