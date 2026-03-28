export default function SectionBar({ label, section, total }: { label: string; section: string; total: string }) {
  return (
    <div className="section-bar sticky top-0 z-30">
      <span>You are now entering ( {label} ) section</span>
      <span>● {section} / {total}</span>
    </div>
  )
}
