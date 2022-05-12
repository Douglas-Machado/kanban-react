import { Plus } from "phosphor-react"
import { useState } from "react"

export function Kanban() {

  const statsList = {
    "To do": {
      title: 'To do',
      tasks: [
        "Fazer estilização",
        "testes"
      ]
    },
    "Doing": {
      title: 'To do',
      tasks: [
        "Front-end"
      ],
    },
    "Staging": {
      title: 'To do',
      tasks: [],
    },
    "Finished": {
      title: 'To do',
      tasks: [],
    },
    "Canceled": {
      title: 'To do',
      tasks: [],
    }
  }
  const [isCreating, setIsCreating] = useState(-1)
  const [taskText, setTaskText] = useState('')

  // function editContent(index: number){
  //   setIsCreating(true)
  // }

  return (
    <div>

      <div className="h-[80px] flex items-center justify-center">
      </div>

      <div className="flex flex-row justify-center px-6 gap-6 drop-shadow-3xl min-h-[50px]">
          {Object.entries(statsList).map(([key, value], index) => {
            return(
              <div key={key} className="bg-white basis-1/6 rounded-[4px] flex flex-col text-black">
                <h3 className="pl-4 pt-3 ">{key}</h3>
                <div className="mx-3 mt-1 mb-2">
                  <section className="flex flex-col">
                    {Object.entries(value.tasks).map((value) => {
                      return(
                        <div key={value[0]} className=" mb-2 bg-zinc-100 rounded-sm p-1 drop-shadow-card">
                          <span>{value[1]}</span>
                        </div>
                      )
                    })}
                  </section>
                  <button 
                    type="submit"
                    onClick={() => setIsCreating(index)}
                    className="flex flex-row items-center text-zinc-500 pl-3 rounded-sm hover:bg-zinc-500/20 w-full">
                    {isCreating ? (
                      <textarea onChange={e => setTaskText(e.target.value)}>{taskText}</textarea>
                    ) : (
                      <>
                        <span>
                          <Plus size={12} color="#0d0d0d"/>
                        </span>
                        <span>
                          New task
                        </span>
                      </>
                    ) }
                  </button>
                </div>

              </div>
            )
          })}

      </div>
    </div>
  )
}