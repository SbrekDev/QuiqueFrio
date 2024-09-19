

type ClientDetailItemProps = {
    label: string,
    data: string
}

export default function ClientDetailItem({label, data}: ClientDetailItemProps) {
  return (
    <>
        {data === '$' || data === '' ? null : (
        <div className="w-40">
          <label className="text-slate-500 text-sm uppercase font-bold">{label}:</label>
          <p className="text-wrap">{data}</p>
        </div>
      )}
    </>

  )
}
