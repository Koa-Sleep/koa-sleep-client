"use client";

import { useEffect } from "react";
import { OpenAPI } from "@/client/core/OpenAPI";

export default function ApiInitializer() {
  useEffect(() => {
    OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL!;
    OpenAPI.WITH_CREDENTIALS = true;
  }, []);

  return null;
}
