
interface IProps {
    title:string
}
export const Title = ({title}:IProps) => {
  return (
    <div className="flex text-3xl font-bold text-slate-400 justify-center mt-10">{title}</div>
  )
}
