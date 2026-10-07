import type { PreviewKind } from "@/data/types";
import { CoverdayDemo } from "./CoverdayDemo";
import { MarketSessionDemo } from "./MarketSessionDemo";
import { VolumeDemo } from "./VolumeDemo";

const demos = {
  coverday: CoverdayDemo,
  "market-sessions": MarketSessionDemo,
  volume: VolumeDemo,
} as const;

export function ProjectDemo({ kind }: { kind: PreviewKind }) {
  const Demo = demos[kind];
  return <Demo />;
}
