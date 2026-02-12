/**
 * 행사/모임 프로그램
 * - Program 섹션에서 사용
 */

import { Mic, Users, PenLine } from 'lucide-react';

export interface ProgramItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const PROGRAMS: ProgramItem[] = [
  { title: '낭독회', icon: Mic },
  { title: '북토크', icon: Users },
  { title: '글쓰기 모임', icon: PenLine },
  { title: '글쓰기 클래스', icon: PenLine },
];
