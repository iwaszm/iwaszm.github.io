---
title: Berlin Transit Live Monitor
date: 2025-11-13
toc: true
type: "project"
tags:
  - OSM
  - GEOdata
summary: ""

image:
  caption: 'Image credit: [**unsplash**](https://unsplash.com/de/fotos/linie-ziel-abfahrt-in-akg9Y9OoqAw)'
  focal_point: ""
  preview_only: false

---

<iframe src="bvgtracker.html"
        class="w-full h-[520px] my-6 rounded-xl border border-gray-200 shadow-sm"
        loading="lazy" allowfullscreen></iframe>

<div class="text-base text-justify leading-relaxed max-w-prose mx-auto">


A modern, responsive web dashboard designed for real-time monitoring of public transport departures in Berlin. This tool provides a comprehensive view of transit movements, combining temporal schedules with spatial tracking.

The page works on both desktop and mobile browsers and automatically updates
vehicle positions every few seconds.

This project was specifically designed and optimized to turn any spare smartphone or tablet into a dedicated, real-time smart transit monitor. By opening this dashboard in full-screen on an old device, you can create a permanent public transport timetable for your home, hallway, or office. 

<table align="center" style="border: none; background: none;">
  <tr style="border: none; background: none;">
    <td align="center" width="50%" style="border: none;">
      <img src="bspl1.JPG" width="60%" alt="Android Landscape Display">
      <br>
      <i>1. Old Android phone displaying the timetable and real-time map (via the <b>Fully Kiosk Browser</b> app).</i>
    </td>
    <td align="center" width="50%" style="border: none;">
      <img src="bspl2.JPG" width="60%" alt="iPhone Timetable Display">
      <br>
      <i>2. Old iPhone displaying the departure timetable (via the <b>Kiosker</b> app).</i>
    </td>
  </tr>
</table>
---

### 🔗 Data Source

Powered by **transport.rest**  
API documentation: https://v6.transport.rest/
Git Repo: https://github.com/iwaszm/BerlinStationMonitor

---

</div>