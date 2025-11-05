---
title: Comment Classification Demo
date: 2025-10-26
toc: true
type: "project"
tags:
  - R
  - Markdown
  - Text Mining
summary: "Interactive report of multilingual YouTube reviews using Hugging Face models."

---

### Summary
This demo explores the use of **Hugging Face zero-shot text classification models** to analyze multilingual user comments (e.g., YouTube). Two classification dimensions are focused on:

- **Sentiment**: whether the comment is positive, neutral, or negative  
- **Category**: what the comment refers to (functionality, UI, or ads)

### Selected Models
Three pre-trained NLI-based transformer models are used for comparison:

- Model A: `facebook/bart-large-mnli`  
- Model B: `joeddav/xlm-roberta-large-xnli`  
- Model C: `typeform/distilbert-base-uncased-mnli`

### 10 Comments to Classify
Following are 10 manually labeled comments, spanning multiple languages, sentiment types, and categories. Each model classifies each comment for both sentiment and category, correct results are shown in **bold** in the table below.

| Comment                                                                 |      Sentiment      |               |               |      Category       |               |               |
|------------------------------------------------------------------------|---------------------|---------------|---------------|---------------------|---------------|---------------|
|                                                                        | A                   | B             | C             | A                   | B             | C             |
| The video loads fast and never lags. Love it!                          | **positive**        | **positive**  | **positive**  | **functionality**   | **functionality** | **functionality** |
| The search function works fine, but nothing special.                   | **neutral**         | positive      | positive      | **functionality**   | **functionality** | user interface |
| I can’t rewind properly anymore, super annoying.                       | **negative**        | **negative**  | **negative**  | **functionality**   | **functionality** | **functionality** |
| I like how the app looks now, clean and smooth.                        | **positive**        | **positive**  | **positive**  | **user interface**  | **user interface** | functionality  |
| I am ok with the UI, it can be better though.                          | positive            | positive      | positive      | **user interface**  | **user interface** | functionality  |
| The layout is messy after the latest update.                           | **negative**        | **negative**  | **negative**  | **user interface**  | **user interface** | functionality  |
| Way too many ads these days, it ruins the experience.                 | **negative**        | **negative**  | **negative**  | **ads**             | **ads**       | **ads**       |
| Ads are skippable now, so it’s not too bad.                            | positive            | positive      | positive      | **ads**             | functionality | **ads**       |
| Zu viele nervige Werbungen, es macht keinen Spaß mehr.                | **negative**        | **negative**  | positive      | **ads**             | **ads**       | functionality |
| 功能正常，但感觉有点卡。                                                   | positive            | positive      | positive      | **user interface**  | **functionality** | user interface |


