/**
 * DividerSection - 메인 콘텐츠와 푸터 사이 구분 섹션
 *
 * [역할]
 * - 둘러보기 아이콘 그리드와 푸터 사이에 시각적·공간적 분리
 * - min-height로 여백 강제 확보 (레이아웃 붕괴 방지)
 *
 * [반응형 min-height]
 * - 180px (모바일) → 220px (sm) → 260px (md) → 320px (lg)
 * - flexShrink: 0으로 flex 레이아웃에서 축소 방지
 *
 * [접근성]
 * - aria-hidden: 스크린리더에서 제외 ( decorative )
 */

export default function DividerSection() {
  return (
    <section
      className="w-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[320px] flex flex-col justify-end bg-amber-50/50"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-8 md:pb-12">
        {/* 구분선 (amber-200) */}
        <div className="border-t border-amber-200" />
      </div>
    </section>
  );
}
