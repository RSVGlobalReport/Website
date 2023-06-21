---
title: Understanding the patterns of global re-emergence of RSV following COVID19 pandemic
layout: post
author: lab
date: 2023-01-24 11:33:00 +0800
categories: [Dashboards, V1]
tags:
math: true
mermaid: true
---

{% assign default_archive="05-12-2023" %}

{% assign archives = "05-12-2023 04-18-2023 03-19-2023 02-02-2023" | split: " " %}
{% include archive_selector.html archives=archives %}

## RSV Cases By Hemisphere
{% include each_hemisphere.html default_archive=default_archive %}

## RSV Cases By Region
{% include each_region.html default_archive=default_archive %}

## RSV Cases By Country
{% include each_country.html default_archive=default_archive %}

## RSV Onset
{% include each_onset_scatter.html default_archive=default_archive %}
