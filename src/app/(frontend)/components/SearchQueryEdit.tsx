"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchQueryEdit() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleUpdateParams = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("openFilter");

    // Navigate with new search params
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleUpdateParams();
  }, []);

  return <></>;
}
