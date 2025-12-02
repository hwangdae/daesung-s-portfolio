import { motion, AnimatePresence } from "framer-motion";
import { Daisy, NotFound } from "@/assets/index";
import Image from "next/image";
import { useEffect } from "react";
export default function Modal({
  open,
  onClose,
  children,
}: {
  open?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden"; // 스크롤 막기
      return () => {
        document.body.style.overflow = originalStyle; // 닫히면 복구
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        // <motion.div
        //   className="fixed inset-0 bg-black backdrop-blur-sm flex items-center justify-center z-[100]"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        //   onClick={onClose}
        // >
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#000000] rounded-sm p-14"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-4">
              <NotFound />
              <div className="mt-7 mb-4">
                <h1 className="title-24-bold mb-4">
                  Oops, You're Already Here.
                </h1>
                <p
                  id="egg-desc"
                  className="text-17-regular text-center !leading-6"
                >
                  포트폴리오 안의 포트폴리오를 보려는
                  <br />
                  무한 루프를 방지했습니다.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-sm text-black bg-white text-16-bold"
                aria-label="모달 닫기"
              >
                돌아가기
              </button>
            </div>
          </motion.div>
        // </motion.div>
      )}
    </AnimatePresence>
  );
}
