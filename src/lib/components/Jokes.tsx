import style from "@/lib/styles/jokes.module.css";
import { lexendLight, geistMono } from "../fonts";
import Link from "next/link";

const JOKES = [
  <>0.1 + 0.2 = 0.30000000000000004</>,
  <>
    Also check my other web at{" "}
    <Link href={"http://localhost:8080"} className={`${style.link}`}>
      http://localhost:8080
    </Link>
  </>,
  <>
    Do{" "}
    <code className={`${geistMono} ${style.code}`}>
      sudo rm -rf --no-preserve-root /
    </code>
  </>,
  <>
    <code className={`${geistMono} ${style.code}`}>
      Exception in thread &quot;main&quot; java.lang.NullPointerException
    </code>
  </>,
  <>
    <code className={`${geistMono} ${style.code}`}>
      git push --force origin life
    </code>
  </>,
  <>Java : JavaScript == Car : Carpet</>,
  <>
    <i>This joke was taken down</i>
  </>,
];

export default function Jokes() {
  const joke = JOKES[Math.floor(Math.random() * JOKES.length)];

  return (
    <>
      <span className={`${lexendLight.className} ${style.joke}`}>{joke}</span>
    </>
  );
}
