import { Kanban } from "phosphor-react"

export function Header(){
  return(
    <>
      <header className="flex flex-row items-center justify-between bg-zinc-500/50">
        <span className="basis-4/5">
          <Kanban size={48} />
        </span>
        <ul className="flex flex-row basis-1/2 justify-around text-white text-md">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </header>
    </>
  )
}