---
title: ''
date: 2025-10-21
type: landing

design:
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      headings:
        about: 'Berufliches Profil'
        education: ''
        interests: ''
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  - block: collection
    id: papers
    content:
      title: Ausgewählte Publikationen
      filters:
        language: en
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 3
      show_date: true
      show_read_time: false
      show_read_more: false

  - block: collection
    id: projects
    content:
      title: Ausgewählte Projekte
      filters:
        language: en
        folders:
          - projects
    design:
      view: article-grid
      columns: 3
      show_date: true
      show_read_time: false
      show_read_more: false

---
