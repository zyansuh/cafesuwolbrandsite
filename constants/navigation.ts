/**
 * 네비게이션 메뉴 항목
 *
 * [사용처]
 * - Navbar: 상단 메뉴 링크
 * - Footer: 바로가기 링크
 *
 * [경로]
 * - 각 상세 페이지 (/about, /cafe 등)로 연결
 */

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'About 수월', href: '/about' },
  { name: 'Cafe', href: '/cafe' },
  { name: 'Books', href: '/books' },
  { name: 'Writers', href: '/writers' },
  { name: 'Program', href: '/program' },
  { name: 'Journal', href: '/journal' },
  { name: 'Store', href: '/store' },
  { name: 'Contact', href: '/contact' },
];
