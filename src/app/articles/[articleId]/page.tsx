"use client"; // Required for client-side hooks

import Link from "next/link";
import { use } from "react";

// Simulating async params and searchParams
async function getParams() {
  return { articleId: "123" }; // Example article ID
}

async function getSearchParams() {
  return { lang: "es" }; // Example default language
}

export default function NewsArticle() {
  const params = use(getParams());
  const searchParams = use(getSearchParams());

  const { articleId } = params;
  const { lang = "en" } = searchParams;

  return (
    <div>
      <h1>News Article</h1>
      <p>Reading in language: {lang.toUpperCase()}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
