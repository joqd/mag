---
title: Why I keep choosing Nuxt (even though I know Svelte is "cooler")
description: A backend developer's honest, slightly biased take on Nuxt vs Next vs Svelte — and why one of them just feels like home.
date: 2026-07-19
featured: false
tags: [programming, nuxt, opinion]

sitemap:
    lastmod: 2026-07-19
---

Let's get the confession out of the way first: I'm a backend guy. Django, PostgreSQL, Nginx, the usual suspects. Frontend is not my home turf, it's more like a country I visit a few times a year and always forget the local customs of. And yet, somehow, this entire blog you're reading is built with Nuxt. Not Next. Not SvelteKit, even though — I'll admit it out loud — Svelte is probably the "cool" pick for someone with my kind of brain.

So here's why Nuxt won anyway.

## It doesn't fight me

The first time I opened a Nuxt project, I didn't feel like I had to learn a new way of thinking. I put a file in `pages/`, and it became a route. I put a file in `components/`, and I could use it anywhere without an import line. I wanted global state shared between two unrelated parts of the app (hello, `usePlayer` composable from my music page), and `useState` just... did that. No boilerplate, no ceremony, no fifteen-minute detour into "which state library should I install today."

For a backend developer, this matters more than people admit. I don't want to _learn_ the frontend framework. I want to _use_ it to finish a feature and go back to the part of the stack I actually understand.

## Vue reads like normal code

This is the big one, and it's very personal. React (and by extension, Next) asks you to think in a specific, slightly abstract way — components as functions, state as a snapshot, effects as this side-channel thing you have to be careful with. It's powerful. I respect it. I also find it exhausting after a long day of Python.

Vue's `<script setup>` reads like... a script. Top to bottom. `ref`, `computed`, a function, done. When I built the global music player for this site, or wired up the [contact form](/contact) with a honeypot and rate limiting, I never once had to stop and think about render cycles or dependency arrays. I just wrote what I meant, and it worked.

## Nitro is doing backend-developer things without asking me to notice

This is where Nuxt quietly wins the whole argument for someone like me. Nitro (Nuxt's server engine) means my `server/api/contact.post.ts` route lives right next to my frontend code, deploys as a real server function, and I never had to configure a separate backend project just to send a Telegram message. It felt less like "a frontend framework added an API folder" and more like "someone who actually understands backend work designed this."

Next has API routes too, sure. But the whole experience — from routing conventions to how content and data fetching are wired together — feels like it was designed API-first for a big company shipping a giant React app, not for one person who wants to build a blog and go make tea.

## So why not Svelte, though?

Okay, real talk. Svelte is genuinely lovely. The compiler-driven approach is clever, the output is small and fast, and SvelteKit's file-based routing is arguably even cleaner than Nuxt's. If I were starting a tiny, performance-critical side project with zero legacy anything, I'd probably be tempted.

But "tempted" isn't "convinced." Two things kept pulling me back to Nuxt:

1. **The ecosystem is just bigger and calmer.** Every time I needed something — a UI kit, a swiper, a markdown/content system, animation helpers — there was a mature Nuxt module for it, usually built by the same core team, usually well documented. With Svelte, I found myself doing more manual wiring, more "here's how you'd probably do this" blog posts instead of official, polished modules.
2. **Vue's mental model happens to match how I already think.** This one isn't really Svelte's fault — Svelte is arguably _simpler_ in some ways. But simple isn't always the same as familiar, and Vue's reactivity model (refs, computed values, watchers) mapped onto my existing habits faster than Svelte's syntax did. That's not a knock on Svelte. That's just me being a creature of habit with a Python brain.

## The honest summary

Next is excellent if you're already deep in the React ecosystem, or you're working somewhere that already picked it for you. Svelte is genuinely exciting, and I wouldn't be shocked if I end up using it for something small down the line, just to scratch the itch. But Nuxt is the one that let a backend developer with limited frontend patience build an entire personal site — blog, projects page, a Telegram-connected contact form, and a music player — without ever feeling like the framework was the obstacle.

That's really the whole pitch. Not "Nuxt is objectively the best framework in existence." Just: it's the one that got out of my way and let me ship things. For a guy who mostly lives in `models.py` and `views.py`, that's worth a lot more than being the trendiest option on the table.
