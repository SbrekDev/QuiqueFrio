

type ClientDetailItemProps = {
    label: string,
    data: string
}

export default function MobileClientDetailItem({label, data}: ClientDetailItemProps) {
  return (
    <>
        {data === '$' || data === '' ? null : (
        <div className="w-40 break-all">
          <label className="text-slate-500 text-sm uppercase font-bold">{label}:</label>
          <p className="text-wrap">{data}</p>
        </div>
      )}
    </>

  )
}
