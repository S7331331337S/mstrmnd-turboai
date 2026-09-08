import { Toolbar as BaseHubToolbar } from "basehub/next-toolbar";

export const Toolbar = () => {
  if (!process.env.BASEHUB_TOKEN) {
    return null;
  }

  return <BaseHubToolbar />;
};
