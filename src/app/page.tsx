import Image from "next/image";
import style from "@/app/page.module.css";
import Bible from "@/lib/components/Bible";
import { lexendLight, lexendMedium } from "@/lib/fonts";

export default function Home() {
  return <>
    <div className={ style.mainHome }>
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
    </div>

    <div className={style.footer}>
      <div className={ style.linkIcon }>
        <a href="https://github.com/FrankyRay" target="_blank">
          <Image 
            src="/icons/github-mark-white.svg"
            width={ 20 }
            height={ 20 }
            alt="Github icon redirect into Github page"
          />
        </a>
        <a href="https://twitter.com/frays_csui" target="_blank">
          <Image 
            src="/icons/x-twitter.svg"
            width={ 20 }
            height={ 20 }
            alt="X (formerly Twitter) icon redirect into X page"
          />
        </a>
      </div>

      <div className={ style.bibleInfo }>
        <Bible />
      </div>
    </div>
  </>;
}
