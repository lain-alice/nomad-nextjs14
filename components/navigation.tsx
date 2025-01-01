"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
// 모듈 css 파일을 js 파일인 것처럼

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      {/* className 충돌 없음 */}
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "!!" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "!!" : ""}
        </li>
      </ul>
    </nav>
  );
}
