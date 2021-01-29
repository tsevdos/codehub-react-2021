import { useState, useEffect } from "react";

export default function usePromise(cb = null) {
  if (!cb) {
    throw new Error("You must provide a callback that returns a Promise!");
  }
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function executePromise() {
      try {
        const data = await cb();
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }

    executePromise();
  }, [cb]);

  return { data, loading, error };
}
