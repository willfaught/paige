---
authors: ["will_faught"]
categories: ["configuration", "paige"]
date: "2022-02-23"
description: "Demonstration of the Paige hide configuration."
paige:
  authors:
    hide: false
  date:
    hide: false
  git:
    commit_url_prefix: "https://github.com/willfaught/paige/commit/"
  reading_time:
    hide: false
  table_of_contents:
    hide: false
  terms:
    hide: false
  style: |
    .paige-authors { display: block; }
tags: ["hide", "singles"]
title: "Hide Configuration"
weight: 10
---

This site hides some single page data by default. This page shows it all.

<!--more-->

## Parameters

This page has the following parameters:

```yaml
paige:
  main:
    metadata:
      authors:
        hide: false
      date:
        hide: false
      git:
        commit_url_prefix: "https://github.com/willfaught/paige/commit/"
      reading_time:
        hide: false
      terms:
        hide: false
    table_of_contents:
      hide: false
```
