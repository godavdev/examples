import { NextResponse } from "next/server"
const main = async () => {
  // If the cache is fresh, return it.
  // If the cache is not fresh, check if the resource has changed;
  // if the resource has changed, request it; otherwise, return the cached version.
  // If there's no match, request the resource and store it in the cache.
  const defaultCache = await fetch("https://catfact.ninja/fact", {
    cache: "default",
  })

  // Request the resource without consulting the cache and don't store it.
  const noStore = await fetch("https://catfact.ninja/fact", {
    cache: "no-store",
  })

  // Request the resource without consulting the cache and store it.
  const reload = await fetch("https://catfact.ninja/fact", {
    cache: "reload",
  })

  // Check the cache; if found, check if the resource has changed.
  // If the resource has changed, request it; otherwise, return the cached version.
  // If there's no match, request the resource and store it in the cache.
  const noCache = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  })

  // If it's in the cache, return the resource (without checking if it has changed).
  // If there's no match, request the resource and store it in the cache.
  const forceCache = await fetch("https://catfact.ninja/fact", {
    cache: "force-cache",
  })

  // Only return the resource if it's in the cache; otherwise, return a 504.
  const onlyIfCached = await fetch("https://catfact.ninja/fact", {
    cache: "only-if-cached",
  })
}
