{{- $now := now -}}
+++
categories = []
date = {{ .Date }}
description = ""
draft = true
link = ""
tags = []
title = "{{ replace (strings.TrimPrefix (print ($now.Format `2006-01-02`) `-`) .Name) `-` ` ` | title }}"
+++
