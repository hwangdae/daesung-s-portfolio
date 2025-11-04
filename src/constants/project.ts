import { CLOSET_DETAIL } from "./closet";
import { MYSELECTSHOP_DETAIL } from "./mySelectshop";
import { NOWAIT_DETAIL } from "./noWait";
import { PYEONSIK_DETAIL } from "./pyeonsik";

export const PROJECTS = [
  {
    id: "noWait",
    title: "노웨잇",
    description: "학교 축제 원격 웨이팅 및 테이블 오더 서비스",
    subDescription:
      "노웨잇 서비스는 대학교 축제에서 불필요한 주점 웨이팅, 수기로 작성되는 주문 시스템을 개선하기 위해 만들어졌습니다. 관리자와 사용자 모두 고려한 기획과 설계가 이루어졌으며, 1명의 디자이너와 프론트엔드 3명, 백엔드 2명이 팀을 이루어 기획 및 디자인, 개발을 진행 하였고, 주 2회 오프라인 회의와 Discord, Figma, Swagger를 통해 원활한 소통과 협업을 진행했습니다.",
    tags: ["팀", "사이드"],
    github: "https://github.com/GTable/NoWait_FE",
    site: "www.nowait.co.kr",
    detail: NOWAIT_DETAIL,
  },
  {
    id: "mySelectshop",
    title: "마이 셀렉트샵",
    description: "내 주변의 쇼핑몰을 탐색하고 리뷰를 남길 수 있는 서비스",
    subDescription: "마이 셀렉트샵 서비스는 여유 시간이 생겼을 때, 그 시간을 활용해 쇼핑을 즐기면 어떨까 하는 아이디어에서 시작되었습니다. 개인 프로젝트로 초기 세팅부터 배포 자동화까지 전 과정을 직접 진행했으며, PostgreSQL과 Prisma를 사용해 데이터베이스 설계 및 관리 경험을 쌓을 수 있었습니다.",
    tags: ["개인", "사이드"],
    github: "https://github.com/hwangdae/mySelectshop",
    site: "myselectshop.shop",
    detail: MYSELECTSHOP_DETAIL,
  },
  {
    id: "pyeonsik",
    title: "편식",
    description: "편의점 음식 조합을 공유하는 커뮤니티 서비스",
    subDescription: "편식 서비스는 편의점 음식의 조합을 공유하고, 그 안에서 다양한 일상 공유, 다양한 이벤트를 제공하기 위해 만들어졌습니다. 디자이너 1명과 프론트엔드 5명이 팀을 이루어 진행했으며 백엔드 서비스로는 supabase를 사용했습니다. 초기에는 부족한 부분이 많았지만, 빠르게 배우고 개선하려는 자세로 임했고, 구현 효율성과 재사용성을 중심으로 개발을 진행했습니다.",
    tags: ["팀", "사이드"],
    github: "https://github.com/hwangdae/nbc_final_pyeonsik",
    site: "",
    detail: PYEONSIK_DETAIL,
  },
  {
    id: "daesungPortfolio",
    title: "포트폴리오 사이트",
    description: "프론트엔드 개발자 황대성의 포트폴리오 사이트",
    subDescription: "",
    tags: ["개인", "사이드", "포트폴리오"],
    github: "https://github.com/hwangdae/daesung-s-portfolio",
    site: "",
    detail: PYEONSIK_DETAIL,
  },
  {
    id: "closet",
    title: "클로젯",
    description: "간단한 의류 쇼핑몰 사이트",
    subDescription: "토스페이먼츠를 활용한 결제 서비스 입니다. 개인 프로젝트로 쿠폰 할인 및 포인트 사용 기능을 추가하여 실제 결제 흐름을 시뮬레이션했습니다. 비회원 상태에서 쿠폰과 포인트를 가정해 테스트할 수 있도록 구현했습니다.",
    tags: ["개인", "사이드"],
    github: "https://github.com/hwangdae/payment",
    site: "",
    detail: CLOSET_DETAIL,
  },
];
