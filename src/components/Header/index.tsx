import Image from 'next/image';
import Link from 'next/link';

import S from './header.module.scss';

export default function Header() {
  return (
    <header className={S.Wrapper}>
      <div>
        <Link href="/">
          <a>
            <Image width="238" height="25" src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
