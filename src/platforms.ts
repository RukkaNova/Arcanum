// The big-three frontier MODELS (Pillar 1 + 3 primary tier).
export const MODELS = {
  'chatgpt': { label: 'ChatGPT', short: 'GPT', accent: '#10a37f' },
  'claude':  { label: 'Claude',  short: 'CLA', accent: '#d96f32' },
  'gemini':  { label: 'Gemini',  short: 'GEM', accent: '#6f8f86' },
} as const;
export type ModelKey = keyof typeof MODELS;
export function modelLabel(k: string){ return (MODELS as any)[k]?.label ?? k; }
export function modelShort(k: string){ return (MODELS as any)[k]?.short ?? k; }
