

type ClientDetailItemProps = {
    label: string,
    data: string
}

export default function ClientDetailItem({label, data}: ClientDetailItemProps) {
  return (
    <div className="w-40">
        <label className="text-slate-600 text-sm uppercase">{label}:</label>
        <p className="text-wrap">{data}</p>
    </div>
  )
}
