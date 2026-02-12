/**
 * 네비게이션 메뉴 항목
 * - Navbar, Footer에서 공통 사용
 */

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'About 수월', href: '#about' },
  { name: 'Cafe', href: '#cafe' },
  { name: 'Books', href: '#books' },
  { name: 'Writers', href: '#writers' },
  { name: 'Program', href: '#program' },
  { name: 'Journal', href: '#journal' },
  { name: 'Store', href: '#store' },
  { name: 'Contact', href: '#contact' },
];
