import { useEffect } from "react";

export default function usePageDocTitle(providedTitle) {
  useEffect(() => {
    document.title = providedTitle;
  }, [providedTitle]);
}
