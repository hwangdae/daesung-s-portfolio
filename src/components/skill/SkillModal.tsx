"use client";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSkillStore } from "@/stores/daisyStore";

export default function SkillModal({ open }: { open: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { setSkillFalse } = useSkillStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // hydration mismatch 방지

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={setSkillFalse}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-[800px] fixed right-[230px] bottom-[135px] bg-[#fcfcfc] px-10 py-12 rounded-md z-50 text-black"
          >
            <h1 className="title-20-regular mb-4">
              🌼 사소하지만 나를 움직이게 하는 작은 스킬들
            </h1>
            <p className="text-17-light mb-3">
              저는 낯을 많이 가리는 편이에요. 그렇지만 살아가다 보면 낯선
              사람에게 말을 걸어야 하거나, 오히려 말을 걸고 싶은 순간이 생각보다
              자주 오더라구요.
              <br />
              그래서 이런 상황을 조금이라도 편하게 넘기기 위해 나만의 작은
              스킬들을 만들어 사용하고 있어요.
            </p>
            <h2 className="text-18-regular mb-2">
              첫 번째는 ‘자기 최면’입니다.
            </h2>
            <p className="text-17-light mb-3">
              “이건 별거 아니야. 말 걸고 나서도 아무 일도 일어나지 않아.” 이런
              식으로 스스로에게 가볍게 최면을 걸어요. 신기하게도 이 생각만 해도
              부담이 절반은 사라져요.
            </p>
            <h2 className="text-18-regular mb-2">
              두 번째는 ‘간식 나눔 스킬’입니다.
            </h2>
            <p className="text-17-light mb-3">
              진짜 작은 간식, 예를 들면 마이쮸 하나 정도를 건네며 자연스럽게
              대화를 시작하는 방법이에요. 돈이 조금은 들긴 하지만 가장 쉬운
              방법이면서, 효과가 가장 좋기 때문에 자주 쓰는 편이에요.
            </p>
            <p className="text-17-light">
              아주 사소한 방법들이지만,
              <br /> 이런 작은 시도들이 제게는 낯가림을 조금씩 덜어내는 좋은
              계기가 되었어요.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,

    document.body
  );
}
