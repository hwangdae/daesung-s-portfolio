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
    detail: MYSELECTSHOP_DETAIL,
  },
  {
    id: "daesungPortfolio",
    title: "포트폴리오 사이트",
    description: "나를 나타내는 공간",
    tags: ["개인", "사이드", "포트폴리오"],
    detail: PYEONSIK_DETAIL,
  },
  {
    id: "closet",
    title: "클로젯",
    description: "간단한 의류 쇼핑몰 사이트",
    tags: ["개인", "사이드"],
    detail: CLOSET_DETAIL,
  },
];
