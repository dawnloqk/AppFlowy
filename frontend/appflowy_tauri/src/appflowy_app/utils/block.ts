
import { createContext } from 'react';
import { ulid } from "ulid";
import { BlockEditor } from '../block_editor/index';
import { BlockType } from '../interfaces';

export const BlockContext = createContext<{
  id?: string;
  blockEditor?: BlockEditor;
}>({});


export function generateBlockId() {
  const blockId = ulid()
  return `block-id-${blockId}`;
}

const AVERAGE_BLOCK_HEIGHT = 30;
export function calculateViewportBlockMaxCount() {
  const viewportHeight = window.innerHeight;
  const viewportBlockCount = Math.ceil(viewportHeight / AVERAGE_BLOCK_HEIGHT);

  return viewportBlockCount;
}


export interface NestedNode {
  id: string;
  children: string;
  parent: string | null;
  type: BlockType;
  data: any;
}

