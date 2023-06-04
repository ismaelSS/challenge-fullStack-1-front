import { IdeleteBunttonPorps} from "../../../interfaces/props"


export const ButtonDelete = ({text, onClickFunction}:IdeleteBunttonPorps) => {
  return(
      <div>
      <button
        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => onClickFunction()}
      >
        {text}
      </button>
    </div>
  )
}
