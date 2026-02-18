---
title: BVG-Bus Tracker
date: 2025-11-13
toc: true
type: "project"
tags:
  - OSM
  - GEOdata
summary: ""

image:
  caption: 'Image credit: [**unsplash**](https://unsplash.com/de/fotos/eingeschalteter-schwarz-grauer-laptop-computer-mcSDtbWXUZU)'
  focal_point: ""
  preview_only: false

---

<iframe src="bvgtracker.html"
        class="w-full h-[520px] my-6 rounded-xl border border-gray-200 shadow-sm"
        loading="lazy" allowfullscreen></iframe>

<div class="text-base text-justify leading-relaxed max-w-prose mx-auto">

## Real-time Bus Tracking Map (Leaflet + BVG API)

This project is a lightweight, mobile-friendly web page that displays
real-time locations of selected bus lines using the **BVG / VBB transport.rest API**
and **Leaflet** maps.

The page works on both desktop and mobile browsers and automatically updates
vehicle positions every few seconds.

---

### 🔗 Data Source

Powered by **transport.rest**  
API documentation: https://v6.transport.rest/
Git Repo: https://github.com/iwaszm/BerlinStationMonitor

---

### 📄 Notes

- Some mobile browsers block remote script loading from `file://`  
  → Use GitHub Pages or any HTTP server to view the map properly.  
- The bus lines and radius can be easily changed in the JavaScript section.

---

</div>