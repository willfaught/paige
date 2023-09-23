+++
categories = []
date = "{{ .Date }}"
description = ""
draft = true
id = "{{ print .File.Path now.UnixNano | sha1 }}"
link = ""
tags = []
title = "{{ replace .Name "-" " " | title }}"
+++
