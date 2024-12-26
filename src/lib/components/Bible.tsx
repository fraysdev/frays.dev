import { bibles } from "../data/bible";
import style from "@/lib/components/styles/bible.module.css";
import { lexendLight, lexendMedium } from "../fonts";

export default function Bible() {
    const bible = bibles[ Math.floor(Math.random() * bibles.length) ];

    return <>
        <span className={`${lexendLight.className} ${style.text}`}>
            { bible.text }
        </span>
        <span className={`${lexendMedium.className}`}>
            {`${bible.book} ${bible.chapter}:${bible.verse} (${bible.version})`}
        </span>
    </>
}