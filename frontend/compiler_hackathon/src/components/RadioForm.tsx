import { FC, ReactElement } from "react"
import { useState } from "react"
import style from "./RadioForm.module.css"
import {python, java,cpp, js} from "../pages/Home/CodeExample"

interface PropsType  {
  language: (e:string)=>void
  defaultCode: (e:string)=>void
}

const RadioForm: FC<PropsType> = (props): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string>("python")

  const handleChange = (event: any) => {
    const value = event.target.value
    setSelectedOption(value)
    if (value == 'cpp'){
      props.language("C++")
      props.defaultCode(cpp)
      return
    }
    if (value == 'js'){
      props.language("JavaScript")
      props.defaultCode(js)
      return
    }
    if (value == 'python'){
      props.language("Python")
      props.defaultCode(python)
      return
    }
    if (value == 'java'){
      props.language("Java")
      props.defaultCode(java)
      return
    }
  }

  return (
    <form>
      <div className={style["RadioFrom__mobileRadioForm"]}>
        {["python", "java", "cpp", "js"].map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={`option-${option}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${option}`}>
              <div
                className={
                  option == "python"
                    ? selectedOption == option
                      ? `${style["RadioForm__pythonIcon"]} ${style["RadioForm__Icon"]} ${style["RadioForm__IconActive"]}`
                      : `${style["RadioForm__pythonIcon"]} ${style["RadioForm__Icon"]}`
                    : option == "java"
                    ? selectedOption == option
                      ? `${style["RadioForm__javaIcon"]} ${style["RadioForm__Icon"]} ${style["RadioForm__IconActive"]}`
                      : `${style["RadioForm__javaIcon"]} ${style["RadioForm__Icon"]}`
                    : option == "cpp"
                    ? selectedOption == option
                      ? `${style["RadioForm__cppIcon"]} ${style["RadioForm__Icon"]} ${style["RadioForm__IconActive"]}`
                      : `${style["RadioForm__cppIcon"]} ${style["RadioForm__Icon"]}`
                    : option == "js"
                    ? selectedOption == option
                      ? `${style["RadioForm__jsIcon"]} ${style["RadioForm__Icon"]} ${style["RadioForm__IconActive"]}`
                      : `${style["RadioForm__jsIcon"]} ${style["RadioForm__Icon"]}`
                    : ""
                }
              ></div>
            </label>
          </div>
        ))}
      </div>
    </form>
  )
}

export default RadioForm
