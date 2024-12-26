import { Lexend } from "next/font/google";
import style from "@/app/page.module.css";

const lexendMedium = Lexend({
  weight: "500",
  subsets: [ 'latin' ]
})

const lexendLight = Lexend({
  weight: "300",
  subsets: [ 'latin' ]
})

export default function Home() {
  return <div className={ style.mainHome }>
    <div className={`${style.message}`}>
      <span className={`${style.title} ${lexendMedium.className}`}>
        Welcome to <b>frays.dev</b>
      </span>
      <span className={`${lexendLight.className}`}>
        Personal website of FrankyRayMS
      </span>
    </div>

    <div className={`${style.subinfo} ${lexendLight.className}`}>
      Page under construction
    </div>
  </div>;
}
